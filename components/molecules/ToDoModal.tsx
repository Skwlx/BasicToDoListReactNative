import React, { useRef } from 'react';
import { View, Modal, StyleSheet, TextInput } from 'react-native';
import Header from '../atoms/Header';
import ToDoButton from '../atoms/ToDoButton';

interface ToDoModalProps {
  visibility: boolean;
  closeModal: () => void;
  data: { text: string; id: number };
  editTask: (text: string, id: number) => void;
}

const ToDoModal: React.FC<ToDoModalProps> = ({ visibility, closeModal, data, editTask }) => {
  const unEditedTask = useRef(data.text);
  return (
    <Modal visible={visibility}>
      <View style={styles.modalContentBox}>
        <Header>Edit Task</Header>
        <TextInput
          style={styles.input}
          placeholder={data.text}
          onChangeText={(text) => editTask(text, data.id)}
        ></TextInput>
        <View style={styles.buttonsBox}>
          <ToDoButton
            title="cancel"
            behavior={() => {
              editTask(unEditedTask.current, data.id);
              closeModal();
            }}
          />
          <ToDoButton title="Ok" behavior={() => closeModal()} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContentBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    width: '40%',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonsBox: {
    width: '40%',
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default ToDoModal;
