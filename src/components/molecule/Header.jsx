import { Image, Platform, StyleSheet, Text, View } from 'react-native';

const Dp = require('../../assets/images/dp.png');

const Header = () => {
  // Platform ke hisaab se size set karo
  const profileSize = Platform.OS === 'web' ? 70 : 45;
  const fontSize = Platform.OS === 'web' ? 24 : 17;
  const paddingTop = Platform.OS === 'web' ? 45 : 45;
  const paddingHorizontal = Platform.OS === 'web' ? 50 : 30;

  return (
    <View style={[styles.container, { paddingTop, paddingHorizontal }]}>
      <Image 
        source={Dp} 
        style={[styles.profileImg, { width: profileSize, height: profileSize, borderRadius: profileSize / 2 }]} 
      />
      <Text style={[styles.heading, { fontSize, marginLeft: profileSize * 0.22 }]}>
        Welcome Back, Tabish!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:20
  },
  profileImg: {},
  heading: {
    fontWeight: '500',
    color: '#333',
  },
});

export default Header;
