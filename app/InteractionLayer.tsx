import {View, StyleSheet, Animated} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

interface HeaderInteractionProps {
  onBackPress(): void;
  onInfoPress(): void;
}

export default function InteractionLayer({onBackPress, onInfoPress}: HeaderInteractionProps) {
  return (
    <>
      <Header {...{onBackPress, onInfoPress}} />
      <Footer />
    </>
  );
}
