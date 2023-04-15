import {View, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default function Screen2() {
  const [inputData, setInputData] = useState({
    name: '',
    password: '',
    address: '',
  });

  const style = StyleSheet.create({
    textBox: {
      borderColor: 'skyblue',
      borderWidth: 2,
      padding: 10,
      marginHorizontal: 20,
      marginVertical: 30,
    },
  });

  const Submit = () => {
    // alert('Submitted');
    console.warn('all values', inputData);
  };

  return (
    <View>
      <TextInput
        placeholder="Please enter the name"
        style={[style.textBox]}
        onChangeText={text => setInputData({name: text})}></TextInput>

      <TextInput
        placeholder="Please enter the password"
        style={[style.textBox]}
        secureTextEntry={true}
        onChangeText={text => setInputData({password: text})}></TextInput>

      <TextInput
        placeholder="Please enter the address"
        style={[style.textBox]}
        onChangeText={text => setInputData({address: text})}></TextInput>

      <Button title="Submit" onPress={Submit} />
    </View>
  );
}
