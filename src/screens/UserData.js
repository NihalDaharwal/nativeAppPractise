import {View, Text, FlatList, StyleSheet} from 'react-native';
// import React from 'react';
const style = StyleSheet.create({
  item: {
    fontSize: 24,
    color: 'orange',
    flex: 1,
    margin: 2,
    backgroundColor: 'green',
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 10,
  },
});

export default UserData = props => {
  const item = props?.item;
  // const style = props.style;
  return (
    <View style={style?.box}>
      <Text style={style?.item}>{item?.name}</Text>
      <Text style={style?.item}>{item?.email}</Text>
    </View>
  );
};
