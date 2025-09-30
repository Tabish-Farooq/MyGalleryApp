import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

const FabBtn = () => {
  const isWeb = Platform.OS === 'web';
  const router = useRouter();

  return (
    <TouchableOpacity
      style={[styles.fab, isWeb && styles.fabWeb]}
      activeOpacity={0.8}
      onPress={() => router.push("/(gallery)/camera-screen")}
    >
      <Feather name="camera" size={22} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 45,
    right: 20,
    backgroundColor: '#4A6FA5',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  fabWeb: {
    width: 60,
    height: 60,
    borderRadius: 30,
    bottom: 40,
    right: 40,
  },
});

export default FabBtn;
