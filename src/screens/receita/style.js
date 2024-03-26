import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window"); // Pega o tamanho do dispositivo

const styles = StyleSheet.create({
  recipe: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    paddingBottom: 20,
  },
  scroll: {
    paddingBottom: 20,
  },
  image: {
    width: width,
    height: 300,
    marginBottom: 20,
  },
  title: {
    marginRight: 20,
    marginLeft: 20,
    fontSize: 40,
    fontWeight: "bold",
  },
  category: {
    color: "#42d4c3",
    fontSize: 25,
    fontWeight: "bold",
  },
  time: {
    fontWeight: "bold",
    fontSize: 20,
  },
  data: {
    margin: 20,
  },
  button: {
    paddingBottom: 20,
  },
});

export default styles;
