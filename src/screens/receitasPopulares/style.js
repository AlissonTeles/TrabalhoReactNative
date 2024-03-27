import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window"); // Pega o tamanho do dispositivo

const styles = StyleSheet.create({
  home: {
    flex: 1,
    padding: 10,
  },
  view: {
    paddingTop: 20,
  },
  touchable: {
    // Width total - as margem = 20 cada )
    width: width - 40,
    borderRadius: 20,
    marginBottom: 20,
  },
  itemImg: {
    // Width total - as margem = 20 cada )
    width: width - 40,
    height: 150,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: "hidden",
    marginTop: -1,
  },
  itemContainer: {
    borderRadius: 20,
    borderWidth: 0.5,
    // Width total - as margem = 20 cada )
    width: width - 40,
    height: 300,
    alignItems: "center",
    justifyContent: "space-between",
  },
  flatListContent: {
    alignItems: "center",
    paddingBottom: 20, // Margem no final da tela
  },
  acessos: {
    color: "blue",
  },
  category: {
    color: "green",
  },
  title: {
    fontSize: 30,
    margin: 10,
    fontWeight: "bold",
  },
});

export default styles;
