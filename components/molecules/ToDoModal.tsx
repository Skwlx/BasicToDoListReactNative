import React, { useState } from 'react';
import { View, Modal, StyleSheet, TextInput } from 'react-native';
import Input from '../atoms/Input';
import ToDoButton from '../atoms/ToDoButton';

interface ToDoModalProps {
  visibility: boolean;
  closeModal: () => void;
  data: { text: string; id: number };
  editTask: (text: string, id: number) => void;
}

const ToDoModal: React.FC<ToDoModalProps> = ({ visibility, closeModal, data, editTask }) => {
  const [textValue, setTextValue] = useState(data.text);
  return (
    <Modal visible={visibility}>
      <View style={styles.modalContentBox}>
        <TextInput
          style={styles.input}
          placeholder={data.text}
          onChangeText={(text) => editTask(text, data.id)}
        ></TextInput>
        <ToDoButton title="close" behavior={() => closeModal()} />
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
  },
});

export default ToDoModal;
