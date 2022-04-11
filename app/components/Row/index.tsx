import React from 'react';
import {ListRenderItemInfo} from 'react-native';
import {Message} from '../../../types';
import Bubble from './Bubble';
import BubbleContent from './BubbleContent';

interface RowProps<T extends Message> {
  info: ListRenderItemInfo<T>;
  authUserID: string;
}

export default function Row({info, authUserID}: RowProps<Message>) {
  const currentMessage = info.item;

  return (
    <Bubble key={info.item.id} {...{authUserID, currentMessage}}>
      <BubbleContent {...{info}} />
    </Bubble>
  );
}
