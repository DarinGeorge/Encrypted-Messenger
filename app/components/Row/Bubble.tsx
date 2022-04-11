import React from 'react';
import {LayoutChangeEvent, StyleProp, Text, View, ViewStyle} from 'react-native';
import {Message} from '../../../types';

export interface BubbleProps<T extends Message> {
  key: any;
  showUserAvatar?: boolean;
  currentMessage?: T;
  nextMessage?: T;
  previousMessage?: T;
  authUserID?: string;
  inverted?: boolean;
  positionStyle?: StyleProp<ViewStyle>;
  renderBubble?(): React.ReactNode;
  renderDay?(): React.ReactNode;
  renderSystemMessage?(): React.ReactNode;
  renderAvatar?(): React.ReactNode;
  shouldUpdateMessage?(props: BubbleProps<T>, nextProps: BubbleProps<T>): boolean;
  onMessageLayout?(event: LayoutChangeEvent): void;
  children?: any;
}

export default function Bubble({
  showUserAvatar = true,
  currentMessage = undefined,
  nextMessage = undefined,
  previousMessage = undefined,
  authUserID = undefined,
  inverted = true,
  positionStyle = {},
  renderAvatar = undefined,
  renderBubble = undefined,
  renderDay = undefined,
  renderSystemMessage = undefined,
  shouldUpdateMessage = undefined,
  onMessageLayout = undefined,
  children,
}: BubbleProps<Message>) {
  if (!currentMessage) return null;

  return (
    <View key={currentMessage.id} style={{flex: 1}}>
      {children}
    </View>
  );
}
