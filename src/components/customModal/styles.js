import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 30,
    paddingTop: 80,
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
