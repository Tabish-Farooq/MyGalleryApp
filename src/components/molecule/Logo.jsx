import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform, StyleSheet, Text, View } from 'react-native';

const  Logo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="cloud-upload-outline" size={80} color="#4A6FA5" />
        <Feather name="image" size={50} color="#4A6FA5" style={styles.galleryIcon} />
      </View>
      <Text style={styles.heading}>My Gallery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.OS === 'web' ? "white" : '#F7F7FF',

    alignItems: 'center', 
    paddingVertical: 20,
  },
  iconContainer: {
    position: 'relative',
  },
  galleryIcon: {
    position: 'absolute',
    left: 48,
    top: 59,
  },
  heading: {
    fontSize: 26,
    color: 'black',
    fontWeight: '500',
    marginTop: 25,
    textAlign: 'center',
  },
});

export default Logo;
