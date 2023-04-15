import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Screen9() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(10);

  // useEffect(() => {
  //   console.warn('count', count);

  //   // return () => {};
  // }, [count]);

  const handleCount = () => {
    setCount(count + 1);
  };
  const handleData = () => {
    setData(count + 1);
  };

  return (
    <View>
      <Text style={{fontSize: 30}}>UseEffect</Text>
      <Text>Count:{count}</Text>
      <Text>Data :{data}</Text>
      <Button title="increaseCount" onPress={handleCount} />
      <Button title="increaseData" onPress={handleData} />
      <User info={{count, data}} />
    </View>
  );
}

const User = props => {
  console.log('props.info', props.info);
  useEffect(() => {
    console.warn('run this code when data props is updated');
  }, [props.info.data]);

  useEffect(() => {
    console.warn('run this code when count props is updated');
  }, [props.info.count]);

  return (
    <View>
      <Text>User Component</Text>
      <Text>Data :{props.info.data}</Text>
      <Text>Count:{props.info.count}</Text>
    </View>
  );
  uu;
};
