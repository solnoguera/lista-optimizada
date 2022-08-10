import react from "react";
import { SafeAreaView, TextInput, Button } from "react-native";
import { styles } from "./styles";

export default AddItem = ({
  item,
  placeholder,
  buttonText,
  onChangeText,
  onPressButton,
}) => (
  <SafeAreaView style={styles.container}>
    <TextInput
      style={styles.input}
      placeholderTextColor="#cccccc"
      placeholder={placeholder}
      value={item}
      onChangeText={onChangeText}
    />
    <Button
      title={buttonText}
      color="#dda15e"
      onPress={onPressButton}
      disabled={item.trim() === ""}
    />
  </SafeAreaView>
);
