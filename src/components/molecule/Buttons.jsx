import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Buttons = ({ title = "Save", color = "#4A6FA5", textColor = "#fff", onPress }) => {
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: color }]} onPress={onPress} activeOpacity={0.8}>
      <Text style={[styles.txt, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 120,
    padding: 15,
    borderRadius: 8,
    elevation: 4, // shadow for android
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  txt: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Buttons;
