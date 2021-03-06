import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface TaskProps {
  children: React.ReactNode;
  onPress: () => void;
  onLongPress: () => void;
}

const Task: React.FC<TaskProps> = ({ children, onPress, onLongPress }) => {
  return (
    <TouchableOpacity
      style={styles.task}
      onPress={() => onPress()}
      onLongPress={() => onLongPress()}
    >
      <Text style={styles.taskText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  task: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 20,
  },
});

export default Task;
