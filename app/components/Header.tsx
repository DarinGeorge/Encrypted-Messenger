import {View, Text, Animated} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Header({scrollY}: {scrollY: Animated.Value}) {
  const {top} = useSafeAreaInsets();

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingTop: top,
        transform: [{translateY: scrollY.interpolate({inputRange: [0, 250], outputRange: [0, 50]})}],
      }}>
      <Text>Header</Text>
    </Animated.View>
  );
}
