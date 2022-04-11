import React from 'react';
import {StatusBar} from 'expo-status-bar';
import Messenger from './app/Messenger';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='auto' />
      <Messenger />
    </SafeAreaProvider>
  );
}
