import React from 'react';
import {ListRenderItemInfo, View} from 'react-native';
import {Message} from '../../../types';
import Bubble from './Bubble';
import BubbleContent from './BubbleContent';

// styles
import {styles as rowStyles} from '../../styles/components/Row/Row.tailwind';

interface RowProps<T extends Message> {
  info: ListRenderItemInfo<T>;
  authUserID: string;
}

export default function Row({info, authUserID}: RowProps<Message>) {
  const currentMessage = info.item;
  const userMatch = currentMessage.author.id === authUserID;

  const styles = rowStyles(userMatch);

  return (
    <View style={[styles.container, styles.alignment]}>
      <Bubble key={info.item.id} {...{authUserID, currentMessage, userMatch}}>
        <BubbleContent {...{info}} />
      </Bubble>
    </View>
  );
}
