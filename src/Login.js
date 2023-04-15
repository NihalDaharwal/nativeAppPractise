import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export function Login(props) {
  // const name = 'nihal';
  const [name, setName] = useState('');
  const age = 23;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>
      <TextInput
        style={{
          // fontSize: 10,
          borderColor: 'black',
          width: 200,
          borderWidth: 1,
        }}
        onChangeText={text => setName(text)}
        placeholder="enter name"></TextInput>
      <Button
        title="Go to Home"
        // onPress={() => props.navigation.navigate('Home')}
        // onPress={() =>
        //   props.navigation.navigate('Home', {name: 'nihal', age: 23})
        onPress={() => props.navigation.navigate('Home', {name, age})}></Button>
    </View>
  );
}
