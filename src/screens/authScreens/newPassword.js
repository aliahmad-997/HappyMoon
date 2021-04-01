import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Button, TextInput} from 'src/components';
import Icon from 'react-native-vector-icons/Ionicons';
import ArrowIcon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const NewPassword = () => {
  const [passwordEyeOff, setPasswordEyeOff] = useState(true);
  const [confirmPasswordEyeOff, setConfirmPasswordEyeOff] = useState(true);
  let navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.newPasswordText}>Set a new password</Text>
      <Text style={styles.accountText}>
        Create a new password for your account
      </Text>
      <View style={{marginTop: 28}}>
        <View>
          <TextInput placeholder="Password" secureTextEntry={true} />
          {passwordEyeOff ? (
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setPasswordEyeOff(!passwordEyeOff)}>
              <Icon name="md-eye-off" color="#A5A5A5" size={24} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setPasswordEyeOff(!passwordEyeOff)}>
              <Icon name="md-eye" color="#A5A5A5" size={24} />
            </TouchableOpacity>
          )}
        </View>
        <View>
          <TextInput placeholder="Confirm Password" secureTextEntry={true} />
          {confirmPasswordEyeOff ? (
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setConfirmPasswordEyeOff(!confirmPasswordEyeOff)}>
              <Icon name="md-eye-off" color="#A5A5A5" size={24} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setConfirmPasswordEyeOff(!confirmPasswordEyeOff)}>
              <Icon name="md-eye" color="#A5A5A5" size={24} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          buttonText="Done"
          buttonStyle={styles.loginContainer}
          buttonTextStyle={styles.loginbtnText}
        />
        <View>
          <Button
            buttonText="Login"
            buttonStyle={styles.signUpContainer}
            buttonTextStyle={styles.signUpText}
            onPress={() => navigation.navigate('Login')}
          />
          <ArrowIcon
            name="arrow-left"
            size={16}
            color="#FFCB3B"
            style={styles.arrowLeft}
          />
        </View>
      </View>
      <View style={{height: 10}}></View>
    </SafeAreaView>
  );
};

export default NewPassword;
