import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import AddingTaskBar from '../molecules/AddingTaskBar';
import Task from '../atoms/Task';
import ToDoModal from '../molecules/ToDoModal';
import AlertMsg from '../atoms/AlertMsg';

const MainScreen = () => {
  const [tasks, setTasks] = useState<{ text: string; id: number }[]>([]);
  const [isModalVisible, setVisible] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<{ text: string; id: number }>({ text: '', id: 0 });

  const addTask = (task: string) => {
    if (task === '') {
      AlertMsg('Error', 'Add some text to your task.');
    } else {
      setTasks((prevState) => [...prevState, { text: task, id: Math.random() }]);
    }
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
      <AddingTaskBar addFunction={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ScrollView>
            <Task
              onPress={() => removeTask(item.id)}
              onLongPress={() => {
                setCurrentTask({ text: item.text, id: item.id });
                setVisible(!isModalVisible);
              }}
            >
              {item.text}
            </Task>
          </ScrollView>
        )}
      />
      <ToDoModal
        data={currentTask}
        visibility={isModalVisible}
        editTask={editTask}
        closeModal={() => setVisible(!isModalVisible)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    position: 'relative',
  },
});

export default MainScreen;
