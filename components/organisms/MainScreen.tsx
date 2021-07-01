import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AddingTaskBar from '../molecules/AddingTaskBar';
import Task from '../atoms/Task';
import ToDoModal from '../molecules/ToDoModal';

const MainScreen = () => {
  const [tasks, setTasks] = useState<{ text: string; id: number }[]>([]);
  const [isModalVisible, setVisible] = useState<boolean>(false);
  const addTask = (task: string) => {
    setTasks((prevState) => [...prevState, { text: task, id: Math.random() }]);
  };

  const removeTask = (task: number) => {
    setTasks((prevState) => prevState.filter((el) => el.id !== task));
  };

  const editTask = (taskText: string, id: number) => {
    setTasks((prevState) =>
      prevState.map((el) => (el.id === id ? { text: taskText, id: id } : el))
    );
  };
  return (
    <View style={styles.mainScreen}>
      <AddingTaskBar onClickFunction={addTask} />
      {tasks.map((task) => (
        <View key={task.id}>
          <Task onPress={() => removeTask(task.id)} onLongPress={() => setVisible(!isModalVisible)}>
            {task.text}
          </Task>
          <ToDoModal
            data={task}
            visibility={isModalVisible}
            editTask={editTask}
            closeModal={() => setVisible(!isModalVisible)}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    position: 'relative',
  },
});

export default MainScreen;
