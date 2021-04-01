import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const TextInputComp = ({placeholder, secureTextEntry, onChangeText, value}) => {
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#A5A5A5"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInputComp;
