import React from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View, ScrollView } from 'react-native';
import MainScreen from './components/organisms/MainScreen';

export default function App() {
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <MainScreen />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
