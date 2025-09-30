import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Audio } from "expo-av";
import { useState } from "react";
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const VoiceAssistent = ({ setCaption }) => {
  const [recording, setRecording] = useState(null);
  const [isRecording, setIsRecording] = useState(false); // for UI feedback

  const isWeb = Platform.OS === "web";
  const SpeechRecognition = isWeb ? window.SpeechRecognition || window.webkitSpeechRecognition : null;

  const startListening = async () => {
    if (isWeb) {
      if (!SpeechRecognition) {
        Alert.alert("Error", "Speech Recognition not supported in this browser");
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();
      setIsRecording(true);
      setRecording("web");

      recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        setCaption(speechResult);
      };

      recognition.onend = () => {
        setIsRecording(false);
        setRecording(null);
      };

      recognition.onerror = (event) => {
        console.log("SpeechRecognition error:", event.error);
        setIsRecording(false);
        setRecording(null);
      };
    } else {
      try {
        const { status } = await Audio.requestPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Permission Denied", "Microphone permission is required!");
          return;
        }

        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const recordingObject = new Audio.Recording();
        await recordingObject.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        await recordingObject.startAsync();

        setRecording(recordingObject);
        setIsRecording(true);
        console.log("Recording started on mobile");
      } catch (error) {
        console.log("Recording error:", error);
        Alert.alert("Error", "Could not start recording on mobile!");
      }
    }
  };

  const stopRecording = async () => {
    if (recording && recording !== "web") {
      try {
        setIsRecording(false);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        console.log("Audio saved at:", uri);
        setRecording(null);
        Alert.alert("Recording stopped", "Audio saved locally!");
      } catch (error) {
        console.log("Stop recording error:", error);
        Alert.alert("Error", "Could not stop recording properly.");
      }
    }
  };

  return (
    <View style={styles.voiceContainer}>
      <TouchableOpacity
        style={[styles.micButton, isRecording ? styles.micButtonActive : null]}
        onPress={isRecording ? stopRecording : startListening}
      >
        <FontAwesome name="microphone" size={40} color="#ffffff" />
      </TouchableOpacity>
      <Text style={styles.txt}>
        {isRecording ? "Recording..." : "Tap and Speak your caption..."}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  voiceContainer: {
    alignItems: "center",
    marginTop: 30,
    gap: 10,
  },
  micButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#4A6FA5",
    alignItems: "center",
    justifyContent: "center",
  },
  micButtonActive: {
    backgroundColor: "#FF5A5F",
  },
  txt: {
    fontWeight: "500",
    fontSize: 18,
    color: "#A9A9A9",
    textAlign: "center",
    fontStyle: "italic",
  },
});

export default VoiceAssistent;
