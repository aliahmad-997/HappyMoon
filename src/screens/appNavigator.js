import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'src/screens/appScreens/services/home';
import Task from 'src/screens/appScreens/services/tasks';
import ChatRoom from 'src/screens/appScreens/services/chatRoom';
import Notifications from 'src/screens/appScreens/services/chatRoom';
import Profile from 'src/screens/appScreens/services/profile';
import Icon from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/FontAwesome5';
import IconB from 'react-native-vector-icons/Ionicons';
import TabBar from './tabBar';

const HomeStack = createStackNavigator();

const HomeTab = () => {
  return (
    <HomeStack.Navigator
      screenOptions={({}) => {
        return {
          cardOverlayEnabled: true,
        };
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        initialParams={{
          img: <Icon name="home" color="black" size={25} />,
        }}
      />
      <Tab.Screen
        name="Task"
        component={Task}
        initialParams={{
          img: <IconA name="tasks" color="black" size={25} />,
        }}
      />
      <Tab.Screen
        name="Chat Room"
        component={ChatRoom}
        initialParams={{
          img: <IconB name="chatbox" color="black" size={25} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        initialParams={{
          img: <IconB name="notifications" color="black" size={25} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{
          img: <IconA name="user-circle" color="black" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
