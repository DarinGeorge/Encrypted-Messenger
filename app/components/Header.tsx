import {Text, Animated} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {offsetHeaderTopByValue, styles} from '../styles/components/Header.tailwind';
import Icon from './Icon';
import {Feather} from '@expo/vector-icons';

interface HeaderProps {
  onBackPress(): void;
  onInfoPress(): void;
}

export default function Header({onBackPress, onInfoPress}: HeaderProps) {
  const {top} = useSafeAreaInsets();

  /** styles helper functions. */
  const paddingTop = offsetHeaderTopByValue(top);

  return (
    <Animated.View style={[styles.container, paddingTop]}>
      <Icon IconType={Feather} name='chevron-left' size={26} onPress={onBackPress} />
      <Text style={styles.username}>Username</Text>
      <Icon IconType={Feather} name='info' size={22} onPress={onInfoPress} />
    </Animated.View>
  );
}
