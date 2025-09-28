import { Image, StyleSheet, View } from 'react-native';
import Buttons from '../../src/components/molecule/Buttons';
import CaptionInput from '../../src/components/molecule/CaptionInput';
import VoiceAssistent from '../../src/components/molecule/VoiceAssistent';

const Egg = require("../../src/assets/images/egg.png");

const CaptionScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Egg} style={styles.img}/>
      <VoiceAssistent/>
      <CaptionInput/>
      
      {/* Buttons Container */}
      <View style={styles.buttonRow}>
        <Buttons 
          title="Save" 
          color="#4A6FA5" 
          textColor='#ffffff' 
          onPress={() => console.log("Save pressed")} 
        />
        <Buttons 
          title="Cancel" 
          color="#ffffff"  
          textColor='#4A6FA5' 
          onPress={() => console.log("Cancel pressed")} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      backgroundColor: '#F7F7FF',
      flex:1,
      paddingTop:60,
  },
  img:{
      width:150,
      height:150,
      alignSelf:'center',
      borderWidth:1,
      resizeMode:'contain',
      borderRadius:10,
  },
  buttonRow: {
      flexDirection: 'row',
      justifyContent: 'center',  // buttons ko horizontally center
      marginTop: 20,
  }
});

export default CaptionScreen;
