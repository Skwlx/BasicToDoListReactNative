import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface InputProps {
  changeFunction: (text: any) => void;
}

const Input: React.FC<InputProps> = ({ changeFunction }) => {
  return (
    <View style={styles.inputBox}>
      <TextInput
        onChangeText={(text) => changeFunction(text)}
        style={styles.input}
        placeholder="Add task"
        clearButtonMode="always"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    flex: 1,
    borderBottomWidth: 1,
  },
  input: {
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
  },
});

export default Input;
