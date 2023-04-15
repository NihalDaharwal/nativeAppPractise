import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import React, { useState } from 'react';

export default function Screen1() {
  const [textData, setTextData] = useState('');

  const style = StyleSheet.create({
    red: {
      color: 'red',
      backgroundColor: 'green',
      fontSize: 30,
    },
  });

  const style1 = StyleSheet.create({
    colors: {
      color: 'white',
      backgroundColor: 'black',
      fontSize: 30,
    },
    fonts: {
      fontSize: 30,
      fontStyle: 'bold',
    },
  });

  return (
    <View>
      
      <Text style={{backgroundColor: 'orange'}}>Hello</Text>

      <Text style={style.red}>Hello</Text>

      <Text style={[style1.colors, style1.fonts]}>Hello</Text>

      {/* <TextInput
        placeholder="enter your name"
        onChangeText={e => {
          console.warn(e);
        }}></TextInput> */}

      <TextInput
        placeholder="enter your name"
        onChangeText={e => {
          setTextData(e);
        }}></TextInput>

      <Button title="submit" onPress={() => alert(textData)} />
    </View>
  );
}
