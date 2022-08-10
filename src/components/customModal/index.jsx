import react from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from "./styles";

const CustomModal = ({
  animationType,
  modalVisible,
  title,
  message,
  itemValue,
  onDelete,
  onCancel,
}) => (
  <Modal animationType={animationType} visible={modalVisible}>
    <View style={styles.modal}>
      <View style={styles.modalContentContainer}>
        <Text style={styles.modalTitle}>{title}</Text>
      </View>
      <View style={styles.modalContentContainer}>
        <Text style={styles.modalMessage}>{message}</Text>
      </View>
      <View style={styles.modalContentContainer}>
        <Text style={styles.modalItem}>"{itemValue}"</Text>
      </View>
      <View style={styles.modalButton}>
        <Button title="Cancelar" onPress={onCancel} color="#dda15e" />
        <Button title="Eliminar" onPress={onDelete} color="#bc6c25" />
      </View>
    </View>
  </Modal>
);

export default CustomModal;
