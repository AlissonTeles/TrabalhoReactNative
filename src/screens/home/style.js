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
    width: (width - 60) / 2,
    borderRadius: 20,
  },
  itemImg: {
    // Width total - as 2 bordas - o gap das colunas
    width: (width - 60) / 2,
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
    // Width total - as 2 bordas - o gap das colunas
    width: (width - 60) / 2,
    height: 250,
    alignItems: "center",
    justifyContent: "space-between",
  },
  flatListContent: {
    columnGap: 20,
    paddingHorizontal: 10,
    paddingBottom: 20, // Margem no final da tela
  },
  title: {
    fontSize: 18,
    margin: 10,
    fontWeight: "bold",
  },
});

export default styles;
