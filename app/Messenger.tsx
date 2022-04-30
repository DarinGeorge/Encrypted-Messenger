import React from 'react';
import {Animated} from 'react-native';
import List from './components/List';
import InteractionLayer from './InteractionLayer';

interface CustomComponents {
  headerComponent?: () => JSX.Element;
  footerComponent?: () => JSX.Element;
  bubbleComponent?: () => JSX.Element;
  messageTextComponent?: () => JSX.Element;
  messageImageComponent?: () => JSX.Element;
  messageVideoComponent?: () => JSX.Element;
  messageAudioComponent?: () => JSX.Element;
}

interface Props {
  onBackPress?: () => void;
  onInfoPress?: () => void;
}

interface MessengerState {
  translateMessages: Animated.Value;
}

export type MessengerProps = Props & CustomComponents;

export default class Messenger extends React.Component<MessengerProps, MessengerState> {
  state = {
    translateMessages: new Animated.Value(0),
  };

  private onBackPress() {
    this.props.onBackPress && this.props.onBackPress();
  }

  private onInfoPress() {
    this.props.onInfoPress && this.props.onInfoPress();
  }

  custom: CustomComponents = {
    headerComponent: this.props.headerComponent,
    footerComponent: this.props.footerComponent,
    bubbleComponent: this.props.bubbleComponent,
    messageTextComponent: this.props.messageTextComponent,
    messageImageComponent: this.props.messageImageComponent,
    messageVideoComponent: this.props.messageVideoComponent,
    messageAudioComponent: this.props.messageAudioComponent,
  };

  render() {
    return (
      <>
        <List />
        <InteractionLayer onBackPress={this.onBackPress} onInfoPress={this.onInfoPress} />
      </>
    );
  }
}
