import { Platform, StyleSheet, TextInput, View } from "react-native";

const CaptionInput = ({ caption, setCaption }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Or type your caption here..."
        value={caption}
        placeholderTextColor="#A9A9A9"
        onChangeText={(txt) => setCaption(txt)}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    width: Platform.select({ web: "30%", default: "90%" }),
    padding: Platform.select({ web: 10, default: 15 }),
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#ffffff",
    fontSize: Platform.select({ web: 14, default: 16 }),
  },
});

export default CaptionInput;
