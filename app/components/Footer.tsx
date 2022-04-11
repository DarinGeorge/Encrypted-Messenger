import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Footer() {
  const {bottom} = useSafeAreaInsets();

  return (
    <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, paddingBottom: bottom}}>
      <Text>Footer</Text>
    </View>
  );
}
