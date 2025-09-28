import Fontisto from '@expo/vector-icons/Fontisto';
import { router } from 'expo-router';
import { Platform, StyleSheet, View } from 'react-native';
import LoginButton from '../../src/components/molecule/LoginButton';
import Logo from '../../src/components/molecule/Logo';

// Correct way to import static images
const Google = require('../../src/assets/images/google.png');

const Login = () => {
  const isWeb = Platform.OS === 'web';

  return (
    <View style={styles.container}>
      {isWeb ? (
        <View style={styles.webBox}>
          <Logo />

           <LoginButton
            title="Sign in with Google"
            icon={Google}
            backgroundColorWeb="#FFFFFF"
            widthWeb={'80%'}
            heightWeb={50}
            textColorWeb="#000000"
            iconSize={20}
            onPress={() => router.push("(gallery)/home-screen")}
          />

          <LoginButton
            title="Continue with Email"
            icon={<Fontisto name="email" size={20} color="#ffffff" />}
            backgroundColorWeb="#4285F4"
            widthWeb={'80%'}
            heightWeb={50}
            textColorWeb="#ffffff"
           onPress={() => router.push("(gallery)/home-screen")}
          />

         
        </View>
      ) : (
        <View style={styles.childContainer}>
          <Logo />

         

          <LoginButton
            title="Sign in with Google"
            icon={Google}
            backgroundColorMobile="#FFFFFF"
            widthMobile={250}
            heightMobile={50}
            textColorMobile="#000000"
            iconSize={20}
            onPress={() => router.push("(gallery)/home-screen")}
          />

           <LoginButton
            title="Continue with Email"
            icon={<Fontisto name="email" size={20} color="#ffffff" />}
            backgroundColorMobile="#4285F4"
            widthMobile={250}
            heightMobile={50}
            textColorMobile="#ffffff"
            onPress={() => router.push("(gallery)/home-screen")}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  childContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  webBox: {
    width: 400,
    minHeight: 400,
    backgroundColor: '#FFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignSelf:'center',
    margin:'auto',
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 8,
    padding: 20,
  },
});

export default Login;