import React from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import MainScreen from './components/organisms/MainScreen';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <MainScreen />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
