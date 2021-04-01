import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from 'src/screens/authScreens/login';
import Signup from 'src/screens/authScreens/signUp';
import ForgotPassword from 'src/screens/authScreens/forgotPassword';
import VerificationCode from 'src/screens/authScreens/verificationCode';
import NewPassword from 'src/screens/authScreens/newPassword';
import Terms from 'src/screens/authScreens/terms';
import Slide1 from 'src/screens/authScreens/slide1';
import Slide2 from 'src/screens/authScreens/slide2';
import Slide3 from 'src/screens/authScreens/slide3';

const AuthStack = createStackNavigator();

const SliderStack = createStackNavigator();

const Slider = () => {
  return (
    <SliderStack.Navigator
      initialRouteName="Slide1"
      screenOptions={({}) => {
        return {
          cardOverlayEnabled: true,
        };
      }}>
      <SliderStack.Screen
        name="Slide1"
        component={Slide1}
        options={{
          gestureEnabled: false,
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <SliderStack.Screen
        name="Slide2"
        component={Slide2}
        options={{
          gestureEnabled: false,
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <SliderStack.Screen
        name="Slide3"
        component={Slide3}
        options={{
          gestureEnabled: false,
          headerShown: false,
          animationEnabled: false,
        }}
      />
    </SliderStack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={({}) => {
        return {
          cardOverlayEnabled: true,
        };
      }}>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Signup"
        component={Signup}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <AuthStack.Screen
        name="VerificationCode"
        component={VerificationCode}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <AuthStack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{gestureEnabled: false, headerShown: false}}
      />
      <AuthStack.Screen
        name="Terms"
        component={Terms}
        options={{
          gestureEnabled: false,
          headerTitle: 'Terms and Condition',
          headerStyle: {
            backgroundColor: '#F7F7F7',
            height: 110,
          },
          headerTitleStyle: {
            fontSize: 22,
          },
        }}
      />
      <AuthStack.Screen
        name="Slider"
        component={Slider}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
