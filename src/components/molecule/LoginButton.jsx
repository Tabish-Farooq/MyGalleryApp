import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LoginButton = ({
  title,
  backgroundColorWeb,
  backgroundColorMobile,
  textColorWeb,
  textColorMobile,
  icon,
  widthWeb,
  widthMobile,
  heightWeb,
  heightMobile,
  iconSize = 20,
  onPress
}) => {
  const isWeb = Platform.OS === 'web';

  const renderIcon = () => {
    if (!icon) return null;
    
    // If it's a React element (like vector icons)
    if (React.isValidElement(icon)) {
      return <View style={{ marginRight: 10 }}>{icon}</View>;
    }
    
    // If it's an image source (number from require() or object)
    if (typeof icon === 'number' || (typeof icon === 'object' && icon !== null)) {
      return (
        <Image
          source={icon}
          style={{ width: iconSize, height: iconSize, marginRight: 10 }}
          resizeMode="contain"
          onError={(error) => console.log('Image failed to load:', error)}
          onLoad={() => console.log('Image loaded successfully')}
        />
      );
    }
    
    console.log('Unsupported icon type:', typeof icon, icon);
    return null;
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: isWeb ? backgroundColorWeb : backgroundColorMobile,
          width: isWeb ? widthWeb : widthMobile,
          height: isWeb ? heightWeb : heightMobile,
        }
      ]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.row}>
        {renderIcon()}
        <Text style={[styles.text, { color: isWeb ? textColorWeb : textColorMobile }]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default LoginButton;