import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Feather} from '@expo/vector-icons';
import usePallete from '../hooks/usePallete';

interface IconProps {
  IconType: typeof Feather;
  name: string;
  size: number;
  onPress?: () => void;
}

export default function Icon({IconType, name, size, onPress}: IconProps) {
  const {scheme} = usePallete();
  const color = scheme === 'light' ? ('black' as const) : ('white' as const);

  return (
    <TouchableOpacity {...{onPress}}>
      <IconType {...{name, size, color}} />
    </TouchableOpacity>
  );
}
