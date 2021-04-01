import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {TextInput, Button} from 'src/components';
import Icon from 'react-native-vector-icons/Ionicons';
import ArrowIcon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Checkbox from 'react-native-check-box';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPasssword, setConfirmPassword] = useState('');
  const [passwordEyeOff, setPasswordEyeOff] = useState(true);
  const [confirmPasswordEyeOff, setConfirmPasswordEyeOff] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  let navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.signupText}>Sign up</Text>
      <View style={styles.signupInputContainer}>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
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
        <Checkbox
          checkBoxColor="#A5A5A5"
          isChecked={isChecked}
          onClick={() => {
            setIsChecked(!isChecked);
          }}
          rightTextView={
            <View style={{flexDirection: 'row', marginLeft: 12}}>
              <Text style={{fontSize: 14}}>I agree to the Prompt </Text>
              <TouchableOpacity>
                <Text
                  style={{fontSize: 14, textDecorationLine: 'underline'}}
                  onPress={() => navigation.navigate('Terms')}>
                  terms and conditions
                </Text>
              </TouchableOpacity>
            </View>
          }
          style={{alignItems: 'center', marginTop: 30}}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          buttonText="Sign up"
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

export default Signup;
