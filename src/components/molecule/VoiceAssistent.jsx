import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const VoiceAssistent = () => {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.container}>
        <FontAwesome name="microphone" size={40} color="#ffffff" />
      </TouchableOpacity>
      <Text style={styles.txt}>Tap and Speak your caption...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',   // text + button dono center
    marginTop: 30,
    gap: 10, 
                   // button aur text ke beech spacing
  },
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,        // 50 se better exact circle
    backgroundColor: '#4A6FA5',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  txt: {
    fontWeight: '500',
    fontSize: 18,
    color: '#A9A9A9',      // correct color
    textAlign: 'center',
    fontStyle:'italic'
  },
});

export default VoiceAssistent;
