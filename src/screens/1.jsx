import {Button, Text, TextInput, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Screen1 from './src/screens/Screen1';
// import Screen2 from './src/screens/Screen2';
// import Screen3 from './src/screens/Screen3';
// import Screen4 from './src/screens/Screen4';

import {Login} from '../Login';
import {HomeScreen} from '../HomeScreen';
import {Header} from '../Header';

// export default function App() {
//   return (
//     <View>
//       {/* <Screen1 /> */}
//       {/* <Screen2 /> */}
//       {/* <Screen3 /> */}
//       {/* <Screen4 /> */}
//     </View>
//   );
// }

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function Login(props) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Login</Text>
//       <Button
//         title="Go to Home"
//         onPress={() => props.navigation.navigate('Home')}></Button>
//     </View>
//   );
// }

// const Header = () => {
//   return <TextInput placeholder="Header" />;
// };

const Stack = createNativeStackNavigator();

export default function App() {
  const btnAction = () => {
    console.warn('btn pressed');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        // for all Screens
        screenOptions={{
          titie: 'User Login',
          headerTitle: () => <Button onPress={btnAction} title="Left" />,
          // headerRight: () => <Button title="Right" />,
          headerRight: () => <Header />,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTitleStyle: {
            fontSize: 20,
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          // for specific screen
          // options={{
          //   titie: 'User Login',
          //   headerTintColor: 'white',
          //   headerStyle: {
          //     backgroundColor: 'orange',
          //   },
          //   headerTitleStyle: {
          //     fontSize: 20,
          //   },
          // }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
