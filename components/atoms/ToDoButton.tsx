import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

interface ToDoButtonProps {
  title: string;
  styles?: {};
  color?: string;
  behavior: () => void;
}

const ToDoButton: React.FC<ToDoButtonProps> = ({ title, styles, color, behavior }) => {
  return (
    <View style={{ ...buttonStyles.button, ...styles }}>
      <Button color={color ? color : 'white'} onPress={() => behavior()} title={title}></Button>
    </View>
  );
};

const buttonStyles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});

export default ToDoButton;
