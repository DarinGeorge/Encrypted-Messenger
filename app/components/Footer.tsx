import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../styles/components/Footer.tailwind';

export default function Footer() {
  const {bottom} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <Text>Footer</Text>
    </View>
  );
}
