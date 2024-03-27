import * as React from "react";
import {
  SectionList,
  Text,
  Image,
  View,
  TouchableHighlight,
} from "react-native";
import { data, category } from "../../data/data"; // Pega o json que precisamos
import styles from "./style";

// Ao Clickar no item da categoria ele vai para as receitas
function goToRecipe(navigation, item) {
  console.log(item.id);
  navigation.navigate("Receita", {
    item: data.filter((el) => el.id === item.id)[0],
    navigator: "Categorias",
  });
}

function CategoryScreen({ navigation }) {
  const renderHeader = ({ section }) => {
    return (
      <View style={styles.headerContainer}>
        <Image source={section.img} style={styles.headerImage} />
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableHighlight
        style={styles.touchable}
        key={item.id}
        underlayColor="#DDDDDD"
        onPress={() => goToRecipe(navigation, item)}
      >
        <Text style={styles.item}>{item.name}</Text>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.view}>
      <SectionList
        sections={category}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default CategoryScreen;
