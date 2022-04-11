import React from 'react';
import {Animated, ListRenderItemInfo} from 'react-native';

import Row from './components/Row';
import InteractionLayer from './InteractionLayer';
import {Message} from '../types';
import {fakeData} from './utils/fakeData';

export default class Messenger extends React.Component {
  state = {
    translateMessages: new Animated.Value(0),
  };

  private scrollY = new Animated.Value(0);

  private renderBubbleRow(info: ListRenderItemInfo<Message>) {
    return <Row {...{info, authUserID: ''}} />;
  }

  private onScroll = Animated.event([{nativeEvent: {contentOffset: {y: this.scrollY}}}], {
    useNativeDriver: true,
  });

  render() {
    return (
      <>
        <InteractionLayer {...{scrollY: this.scrollY}} />
        <Animated.FlatList data={fakeData} inverted renderItem={this.renderBubbleRow} onScroll={this.onScroll} />
      </>
    );
  }
}
