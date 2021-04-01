import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {TextInput, Button} from 'src/components';
import Icon from 'react-native-vector-icons/Ionicons';
import ArrowIcon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eyeoff, setEyeOff] = useState(true);
  let navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <Text style={styles.loginText}>Login</Text>
      <Text style={styles.luckyMoonText}>LuckyMoon</Text>
      <ScrollView style={{flex: 1}}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            secureTextEntry={false}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <View>
            <TextInput
              placeholder="Password"
              secureTextEntry={eyeoff}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            {eyeoff ? (
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setEyeOff(!eyeoff)}>
                <Icon name="md-eye-off" color="#A5A5A5" size={24} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setEyeOff(!eyeoff)}>
                <Icon name="md-eye" color="#A5A5A5" size={24} />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={{marginTop: 16, alignSelf: 'center'}}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          buttonText="Login"
          buttonStyle={styles.loginContainer}
          buttonTextStyle={styles.loginbtnText}
          onPress={() => navigation.navigate('Slider')}
        />
        <View>
          <Button
            buttonText="Sign up"
            buttonStyle={styles.signUpContainer}
            buttonTextStyle={styles.signUpText}
            onPress={() => navigation.navigate('Signup')}
          />
          <ArrowIcon
            name="arrow-right"
            size={16}
            color="#FFCB3B"
            style={styles.arrow}
          />
        </View>
      </View>
      <View style={{height: 5}}></View>
    </SafeAreaView>
  );
};

export default Login;
