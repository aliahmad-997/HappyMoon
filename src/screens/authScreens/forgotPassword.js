import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {TextInput} from 'react-native-paper';
import {Button} from 'src/components';
import {useNavigation} from '@react-navigation/native';

const ForgortPassword = () => {
  const [email, setEmail] = useState('');
  let navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      <Text style={styles.verificationCode}>
        We will send a verification code to your email.
      </Text>
      <TextInput
        label="Email"
        style={styles.emailInput}
        mode={'flat'}
        keyboardType={'email-address'}
        theme={{
          colors: {
            ...theme.colors,
            text: email.error ? '#DC3030' : theme.colors.text,
          },
        }}
        underlineColor="transparent"
      />
      <View style={styles.buttonContainer}>
        <Button
          buttonText="Send Verification"
          buttonStyle={styles.loginContainer}
          buttonTextStyle={styles.loginbtnText}
          onPress={() => navigation.navigate('VerificationCode')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgortPassword;

const theme = {
  colors: {
    primary: '#A5A5A5',
    background: '#FFF',
    surface: '#FFF',
    accent: '#FFF',
    error: '#DC3030',
    text: '#161F32',
    onSurface: '#FFF',
    onBackground: '#FFF',
    disabled: '#AFB6C4',
    placeholder: '#A0A7B6',
    backdrop: '#FFF',
    notification: '#FFF',
  },
};
