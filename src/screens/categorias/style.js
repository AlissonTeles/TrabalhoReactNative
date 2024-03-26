import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window"); // Pega o tamanho do dispositivo

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  item: {
    fontSize: 28,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
    textDecorationLine: "underline",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerImage: {
    width: width,
    height: 200,
    marginBottom: 10,
  },
});

export default styles;
