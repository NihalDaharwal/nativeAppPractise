import {View, Text, SectionList} from 'react-native';
import React from 'react';

export default function Screen8() {
  const users = [
    {
      id: 1,
      name: 'nihal',
      data: ['Reactjs', 'React Native', 'redux'],
    },
    {
      id: 2,
      name: 'namrata',
      data: ['React', 'React Native', 'Mui'],
    },
    {
      id: 3,
      name: 'shweta',
      data: ['Nodejs', 'nest', 'Taiwind'],
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 31}}>section list in React native</Text>
      <SectionList
        sections={users}
        renderItem={({item}) => (
          <Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 20, color: 'red'}}> {name}</Text>
        )}
      />
    </View>
  );
}
