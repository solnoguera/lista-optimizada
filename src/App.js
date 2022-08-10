import { useState } from "react";
import { StyleSheet, FlatList, View, SafeAreaView } from "react-native";
import { AddItem, Item, CustomModal } from "./components/index";

export default function App() {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeText = (text) => {
    setInput(text);
  };

  const addItem = () => {
    setArray([...array, { value: input, id: array.length + 1 }]);
    setInput("");
  };

  const onDeleteItem = (id) => {
    const newArray = array.filter((item) => item.id !== id);
    setArray(newArray);
    setModalVisible(!modalVisible);
  };

  const handleModal = (item) => {
    setSelectedItem(item);
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }) => (
    <Item item={item} handleModal={() => handleModal(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <AddItem
        item={input}
        placeholder={"Type something"}
        buttonText={"Add"}
        onChangeText={onChangeText}
        onPressButton={addItem}
      />
      <View>
        <FlatList
          data={array}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <CustomModal
          animationType="slide"
          modalVisible={modalVisible}
          title="Confirmation"
          message="¿Are you sure you want to delete this item?"
          itemValue={selectedItem.value}
          onDelete={() => onDeleteItem(selectedItem.id)}
          onCancel={() => setModalVisible(!modalVisible)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
  },
});
