import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

export default function Screen6() {
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
    {
      id: 5,
      name: 'nihal',
    },
    {
      id: 6,
      name: 'namrata',
    },
    {
      id: 7,
      name: 'shweta',
    },
    {
      id: 8,
      name: 'ravi',
    },
    {
      id: 9,
      name: 'nihal',
    },
    {
      id: 10,
      name: 'namrata',
    },
    {
      id: 11,
      name: 'shweta',
    },
    {
      id: 12,
      name: 'ravi',
    },

    {
      id: 13,
      name: 'ravi',
    },
    {
      id: 14,
      name: 'nihal',
    },
    {
      id: 15,
      name: 'namrata',
    },
    {
      id: 16,
      name: 'shweta',
    },
    {
      id: 17,
      name: 'ravi',
    },

    {
      id: 18,
      name: 'ravi',
    },
    {
      id: 19,
      name: 'nihal',
    },
    {
      id: 20,
      name: 'namrata',
    },
    {
      id: 21,
      name: 'shweta',
    },
    {
      id: 22,
      name: 'ravi',
    },
    ,
    {
      id: 23,
      name: 'shweta',
    },
    {
      id: 24,
      name: 'ravi',
    },
    ,
    {
      id: 25,
      name: 'shweta',
    },
    {
      id: 26,
      name: 'ravi',
    },
  ];

  const style = StyleSheet.create({
    item: {
      fontSize: 25,
      backgroundColor: 'blue',
      color: 'white',
      margin: 5,
      padding: 5,
      width: 120,
      height: 120,
      textAlignVertical: 'center',
      textAlign: 'center',
    },
  });
  return (
    <View>
      <Text style={{fontSize: 31}}>Grid with dyanic data</Text>
      {/* <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}> */}
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {users.map(item => (
            <Text style={style.item}>{item.name}</Text>
          ))}
        </View>
      </ScrollView>

      {/* <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text>
        <Text style={style.item}>Nihal</Text> */}
      {/* </View> */}
    </View>
  );
}
