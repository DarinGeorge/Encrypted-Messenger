import {View, Text, ListRenderItemInfo} from 'react-native';
import React from 'react';
import {Message} from '../../../types';

export interface BubbleContentProps<T extends Message> {
  info: ListRenderItemInfo<T>;
}

export default function BubbleContent({info: {item, index}}: BubbleContentProps<Message>) {
  return (
    <View>
      <Text>{item.text}</Text>
    </View>
  );
}
