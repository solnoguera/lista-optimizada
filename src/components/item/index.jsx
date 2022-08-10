import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Item = ({ item, handleModal }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity onPress={() => handleModal(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
