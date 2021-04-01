import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Button = ({
  buttonText,
  buttonStyle,
  onPress,
  buttonTextStyle,
  disabled,
}) =>
  disabled ? (
    <View style={buttonStyle} onPress={!disabled ? onPress : null}>
      <Text style={buttonTextStyle}>{buttonText}</Text>
    </View>
  ) : (
    <TouchableOpacity style={buttonStyle} onPress={!disabled ? onPress : null}>
      <Text style={buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );

export default Button;
