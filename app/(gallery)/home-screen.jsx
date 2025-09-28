import { StyleSheet, View } from 'react-native';
import EachItem from '../../src/components/molecule/EachItem';
import FabBtn from '../../src/components/molecule/FabBtn';
import Header from '../../src/components/molecule/Header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <EachItem />
      <FabBtn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7FF', // screen ka background
  },
});

export default HomeScreen;
