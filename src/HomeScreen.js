import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export function HomeScreen(props) {
  // console.warn(props.route.params);
  const {name, age} = props.route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
      {/* <Text style={{fontSize: 30}}>Name:{props.route.params.name}</Text>
      <Text style={{fontSize: 30}}>Age:{props.route.params.age}</Text> */}
      <Text style={{fontSize: 30}}>Name:{name}</Text>
      <Text style={{fontSize: 30}}>Age:{age}</Text>
    </View>
  );
}
