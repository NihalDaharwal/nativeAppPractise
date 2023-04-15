import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

const Signup = () => {
  return (
    <View>
      <Text>signup</Text>
    </View>
  );
};

export default function Screen5() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Signup" component={Signup} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
