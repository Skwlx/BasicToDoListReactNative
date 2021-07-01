import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../atoms/Input';
import ToDoButton from '../atoms/ToDoButton';

interface AddingTaskBarProps {
  onClickFunction: (task: string) => void;
}

const AddingTaskBar: React.FC<AddingTaskBarProps> = ({ onClickFunction }) => {
  const [task, setNewTask] = useState('');

  const addTask = (task: string) => {
    setNewTask(task);
  };
  return (
    <View style={styles.barBox}>
      <Input changeFunction={addTask} />
      <ToDoButton title="add" behavior={onClickFunction.bind(this, task)} />
    </View>
  );
};

const styles = StyleSheet.create({
  barBox: {
    margin: 'auto',
    marginTop: 70,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AddingTaskBar;
