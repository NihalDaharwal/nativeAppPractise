import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const Login = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 40}}>Login</Text>
    </View>
  );
};

const Signup = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 40}}>signup</Text>
    </View>
  );
};

const Other = () => {
  const users = [
    {
      id: 1,
      name: 'nihal',
    },
    {
      id: 2,
      name: 'namrata',
    },
    {
      id: 3,
      name: 'shweta',
    },
    {
      id: 4,
      name: 'ravi',
    },
  ];

  const styles = StyleSheet.create({
    item: {
      fontSize: 21,
      padding: 10,
      color: 'white',
      backgroundColor: 'blue',
      borderColor: 'black',
      borderWidth: 1,
      margin: 10,
    },
  });

  return (
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <View>
      {/* <Text style={{fontSize: 40}}>Other</Text> */}
      <FlatList
        data={users}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const Other1 = () => {
  const users = [
    {
      id: 1,
      name: 'nihal',
    },
    {
      id: 2,
      name: 'namrata',
    },
    {
      id: 3,
      name: 'shweta',
    },
    {
      id: 4,
      name: 'ravi',
    },
    ,
    {
      id: 2,
      name: 'namrata',
    },
    {
      id: 3,
      name: 'shweta',
    },
    {
      id: 4,
      name: 'ravi',
    },
    ,
    {
      id: 2,
      name: 'namrata',
    },
    {
      id: 3,
      name: 'shweta',
    },
    {
      id: 4,
      name: 'ravi',
    },
    ,
    {
      id: 2,
      name: 'namrata',
    },
    {
      id: 3,
      name: 'shweta',
    },
    {
      id: 4,
      name: 'ravi',
    },
  ];

  const styles = StyleSheet.create({
    item: {
      fontSize: 21,
      padding: 10,
      color: 'white',
      backgroundColor: 'blue',
      borderColor: 'black',
      borderWidth: 1,
      margin: 10,
    },
  });

  return (
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <View>
      {/* <Text style={{fontSize: 40}}>Other</Text> */}
      {/* <FlatList
        data={users}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => item.id}
      /> */}
      <ScrollView>
        {users.map(item => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Signup" component={Signup} />
        <Tab.Screen name="Other" component={Other} />
        <Tab.Screen name="Other1" component={Other1} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
