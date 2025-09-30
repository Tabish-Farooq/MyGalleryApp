import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Buttons from "../../src/components/molecule/Buttons";
import CaptionInput from "../../src/components/molecule/CaptionInput";
import VoiceAssistent from "../../src/components/molecule/VoiceAssistent";
import { useGallery } from "../../src/context/GalleryContext";

const CaptionScreen = () => {
  const { id, photoUri } = useLocalSearchParams(); // Get both id and photoUri
  const router = useRouter();
  const { items, updateCaption, addItem } = useGallery();

  // Check if we're editing existing item or adding new photo
  const isNewPhoto = !!photoUri;
  const item = !isNewPhoto ? items.find((i) => i.id == id) : null;

  const [savedCaption, setSavedCaption] = useState(item?.name || "");
  const [tempCaption, setTempCaption] = useState("");

  useEffect(() => {
    if (item) {
      setSavedCaption(item.name);
      setTempCaption("");
    } else if (isNewPhoto) {
      setSavedCaption("New Photo");
      setTempCaption("");
    }
  }, [id, photoUri]);

  const handleSave = () => {
    if (tempCaption.trim() === "") {
      Alert.alert("Error", "Please enter a caption before saving");
      return;
    }

    if (isNewPhoto) {
      // Adding new photo from camera
      const newItem = {
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        image: { uri: photoUri },
        name: tempCaption.trim(),
      };
      addItem(newItem);
      router.push("/(gallery)/home"); // Go to home screen
    } else {
      // Updating existing item
      updateCaption(item.id, tempCaption.trim());
      setSavedCaption(tempCaption);
      router.back();
    }
  };

  const handleCancel = () => {
    if (isNewPhoto) {
      Alert.alert(
        "Discard Photo?",
        "Are you sure you want to discard this photo?",
        [
          { text: "No", style: "cancel" },
          { text: "Yes", style: "destructive", onPress: () => router.push("/(gallery)/home") }
        ]
      );
    } else {
      router.back();
    }
  };

  // Get the image source based on whether it's new photo or existing item
  const imageSource = isNewPhoto ? { uri: photoUri } : item?.image;

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid={true}
      extraScrollHeight={100}
    >
      {(item || isNewPhoto) ? (
        <>
          <Image source={imageSource} style={styles.img} />

          <Text style={styles.captionText}>
            {isNewPhoto ? "Add Caption" : savedCaption}
          </Text>

          <VoiceAssistent setCaption={setTempCaption} />
          <CaptionInput caption={tempCaption} setCaption={setTempCaption} />

          <View style={styles.buttonRow}>
            <Buttons
              title="Save"
              color="#4A6FA5"
              textColor="#ffffff"
              onPress={handleSave}
            />
            <Buttons
              title="Cancel"
              color="#ffffff"
              textColor="#4A6FA5"
              onPress={handleCancel}
            />
          </View>
        </>
      ) : (
        <Text style={styles.errorText}>
          Item not found
        </Text>
      )}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7FF",
    flexGrow: 1,
    paddingTop: 60,
    justifyContent: "flex-start",
  },
  img: {
    width: 150,
    height: 150,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#ffffff",
    resizeMode: "contain",
    borderRadius: 10,
  },
  captionText: {
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
    color: "grey",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 10,
  },
  errorText: {
    textAlign: "center",
    marginTop: 50,
    color: "red",
  },
});

export default CaptionScreen;