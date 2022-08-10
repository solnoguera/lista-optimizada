import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 150,
  },
  modalContentContainer: {
    paddingVertical: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
  },
  modalMessage: {
    fontSize: 18,
  },
  modalItem: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },
});
