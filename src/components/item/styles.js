import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#d4a373",
    borderRadius: 6,
  },
  item: {
    fontSize: 22,
    paddingRight: 15,
  },
  delete: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
