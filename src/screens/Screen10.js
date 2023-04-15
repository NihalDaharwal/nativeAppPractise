import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

export default function Screen10() {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Text>Show/hide component</Text>
      <Button title="Toggle component" onPress={() => setShow(!show)} />
      {/* <Button title="show component" onPress={() => setShow(true)} /> */}
      {show ? <User /> : null}
      {/* <Button title="show component" onPress={() => setShow(false)} /> */}
    </View>
  );
}

const User = () => {
  return (
    <View>
      <Text>User Component</Text>
    </View>
  );
};
