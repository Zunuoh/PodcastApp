import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MusicScreen from './src/MusicScreen';
import LoginScreen from './src/LoginScreen';
import ChanelScreen from './src/ChanelScreen';

export default function App() {
  return (
    <MusicScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
