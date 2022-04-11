import {View, StyleSheet, Animated} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function InteractionLayer({scrollY}: {scrollY: Animated.Value}) {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Header {...{scrollY}} />
      <Footer />
    </View>
  );
}
