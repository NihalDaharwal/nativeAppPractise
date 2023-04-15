import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import UserData from './UserData';

export default function Screen7() {
  const users = [
    {
      id: 1,
      name: 'nihal',
      email: 'nihal@gmail.com',
    },
    {
      id: 2,
      name: 'namrata',
      email: 'namrata@gmail.com',
    },
    {
      id: 3,
      name: 'shweta',
      email: 'shwta@gmail.com',
    },
    {
      id: 4,
      name: 'ravi',
      email: 'ravi@gmail.com',
    },
    {
      id: 5,
      name: 'nihal',
      email: '1@gmail.com',
    },
    {
      id: 6,
      name: 'namrata',
      email: '12@gmail.com',
    },
    {
      id: 7,
      name: 'shweta',
      email: '123@gmail.com',
    },
    {
      id: 8,
      name: 'ravi',
    },
    {
      id: 9,
      name: 'nihal',
      email: '1@gmail.com',
    },
    {
      id: 10,
      name: 'namrata',
      email: '1@gmail.com',
    },
    {
      id: 11,
      name: 'shweta',
      email: '1@gmail.com',
    },
    {
      id: 12,
      name: 'ravi',
      email: '1@gmail.com',
    },

    {
      id: 13,
      name: 'ravi',
      email: '1@gmail.com',
    },
    {
      id: 14,
      name: 'nihal',
      email: '1@gmail.com',
    },
    {
      id: 15,
      name: 'namrata',
      email: '1@gmail.com',
    },
    {
      id: 16,
      name: 'shweta',
      email: '1@gmail.com',
    },
    {
      id: 17,
      name: 'ravi',
      email: '1@gmail.com',
    },

    {
      id: 18,
      name: 'ravi',
      email: '1@gmail.com',
    },
    {
      id: 19,
      name: 'nihal',
      email: '1@gmail.com',
    },
    {
      id: 20,
      name: 'namrata',
      email: '1@gmail.com',
    },
    {
      id: 21,
      name: 'shweta',
      email: '1@gmail.com',
    },
    {
      id: 22,
      name: 'ravi',
      email: '1@gmail.com',
    },

    {
      id: 23,
      name: 'shweta',
      email: '1@gmail.com',
    },
    {
      id: 24,
      name: 'ravi',
      email: '1@gmail.com',
    },

    {
      id: 25,
      name: 'shweta',
      email: '1@gmail.com',
    },
    {
      id: 26,
      name: 'ravi',
      email: '1@gmail.com',
    },
  ];

  //   const style = StyleSheet.create({
  //     item: {
  //       fontSize: 24,
  //       color: 'orange',
  //       flex: 1,
  //       margin: 2,
  //       backgroundColor: 'green',
  //       textAlign: 'center',
  //     },
  //     box: {
  //       flexDirection: 'row',
  //       borderWidth: 2,
  //       borderColor: 'orange',
  //       marginBottom: 10,
  //     },
  //   });

  return (
    <View>
      <Text style={{fontSize: 27}}>Component in loop with Flatlist</Text>
      <FlatList
        data={users}
        renderItem={({item}) => (
            // <UserData item={item} style={style} />
          <UserData item={item} />

          //   <View style={style.box}>
          //     <Text style={style.item}>{item?.name}</Text>
          //     <Text style={style.item}>{item?.email}</Text>
          //   </View>
        )}
      />
    </View>
  );
}

// const UserData = props => {
//   const item = props.item;
//   const style = props.style;
//   return (
//     <View style={style?.box}>
//       <Text style={style?.item}>{item?.name}</Text>
//       <Text style={style?.item}>{item?.email}</Text>
//     </View>
//   );
// };
