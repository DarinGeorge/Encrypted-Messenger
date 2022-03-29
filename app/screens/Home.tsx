import {View, Text} from 'react-native';
import React from 'react';
import {base} from '../styles/Container.tailwind';

export default function Home() {
  return (
    <View style={base.background}>
      <Text>Home</Text>
    </View>
  );
}
