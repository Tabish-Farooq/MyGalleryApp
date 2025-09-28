import { useState } from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';

const CaptionInput = () => {
  const [caption, setCaption] = useState("");

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
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    width: Platform.select({
      web: '30%',   // web pe chhota
      default: '90%', // mobile pe bada
    }),
    padding: Platform.select({
      web: 10,      // web pe halka padding
      default: 15,  // mobile pe normal padding
    }),
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: Platform.select({
      web: 14,      // web pe thoda chhota font
      default: 16,  // mobile pe normal
    }),
  },
});

export default CaptionInput;
