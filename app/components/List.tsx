import {ListRenderItemInfo, Animated} from 'react-native';
import React from 'react';
import {Message} from '../../types';
import Row from './Row';
import {fakeData} from '../utils/fakeData';
import {footerHeight, headerHeight} from '../constants/Defaults';

export default function List() {
  const renderBubbleRow = (info: ListRenderItemInfo<Message>) => {
    return <Row {...{info, authUserID: '001'}} />;
  };

  return (
    <Animated.FlatList
      data={fakeData}
      inverted
      renderItem={renderBubbleRow}
      contentContainerStyle={{paddingTop: footerHeight, paddingBottom: headerHeight}}
    />
  );
}
