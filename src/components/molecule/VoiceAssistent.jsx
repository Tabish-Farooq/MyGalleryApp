import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Conditionally import for native platforms
let ExpoSpeechRecognitionModule = null;
let useSpeechRecognitionEvent = () => {};

if (Platform.OS !== "web") {
  const speechModule = require("expo-speech-recognition");
  ExpoSpeechRecognitionModule = speechModule.ExpoSpeechRecognitionModule;
  useSpeechRecognitionEvent = speechModule.useSpeechRecognitionEvent;
}

const VoiceAssistant = ({ setCaption }) => {
  const [recognizing, setRecognizing] = useState(false);
  const [transcript, setTranscript] = useState("");

  const isWeb = Platform.OS === "web";

  // Native speech recognition events (only on mobile)
  if (!isWeb && useSpeechRecognitionEvent) {
    useSpeechRecognitionEvent("result", (event) => {
      const transcriptText = event.results[0]?.transcript;
      setTranscript(transcriptText);
    });

    useSpeechRecognitionEvent("end", () => {
      setRecognizing(false);
      if (transcript) {
        setCaption(transcript);
      }
    });

    useSpeechRecognitionEvent("error", (event) => {
      console.log("error code:", event.error, "error message:", event.message);
      setRecognizing(false);
      Alert.alert("Error", event.message || "Speech recognition failed");
    });
  }

  // Web Speech Recognition
  const startWebRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      Alert.alert("Error", "Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setRecognizing(true);

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setCaption(speechResult);
      setRecognizing(false);
    };

    recognition.onend = () => {
      setRecognizing(false);
    };

    recognition.onerror = (event) => {
      console.log("SpeechRecognition error:", event.error);
      Alert.alert("Error", "Speech recognition failed");
      setRecognizing(false);
    };
  };

  // Native Speech Recognition (Android/iOS)
  const startNativeRecognition = async () => {
    if (!ExpoSpeechRecognitionModule) {
      Alert.alert("Error", "Speech recognition not available");
      return;
    }

    const result = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (!result.granted) {
      Alert.alert(
        "Permission Required",
        "Microphone permission is required for voice input"
      );
      return;
    }

    setTranscript("");
    setRecognizing(true);

    ExpoSpeechRecognitionModule.start({
      lang: "en-US",
      interimResults: true,
      maxAlternatives: 1,
      continuous: false,
      requiresOnDeviceRecognition: false,
      addsPunctuation: true,
      contextualStrings: ["gallery", "photo", "caption"]
    });
  };

  const stopRecognition = () => {
    if (isWeb) {
      // Web recognition stops automatically
      setRecognizing(false);
    } else if (ExpoSpeechRecognitionModule) {
      ExpoSpeechRecognitionModule.stop();
      setRecognizing(false);
    }
  };

  const handlePress = () => {
    if (recognizing) {
      stopRecognition();
    } else {
      if (isWeb) {
        startWebRecognition();
      } else {
        startNativeRecognition();
      }
    }
  };

  useEffect(() => {
    return () => {
      if (recognizing && !isWeb && ExpoSpeechRecognitionModule) {
        ExpoSpeechRecognitionModule.stop();
      }
    };
  }, []);

  return (
    <View style={styles.voiceContainer}>
      <TouchableOpacity
        style={[styles.micButton, recognizing && styles.micButtonActive]}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <FontAwesome name="microphone" size={40} color="#ffffff" />
      </TouchableOpacity>
      
      <Text style={styles.txt}>
        {recognizing ? "Listening..." : "Tap and speak your caption..."}
      </Text>
      
      {transcript && !isWeb ? (
        <Text style={styles.transcriptText}>
          "{transcript}"
        </Text>
      ) : null}
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
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
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
  transcriptText: {
    marginTop: 10,
    fontSize: 16,
    color: "#4A6FA5",
    fontStyle: "italic",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default VoiceAssistant;