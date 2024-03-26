import * as React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { data } from "../../data/data.js"; // Nosso json com os dados
import styles from "./style.js"; // Nosso estilo em outra pagina
function goToRecipe(navigation, item) {
  navigation.navigate("Receita", { item, navigator: "Home" });
}

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableHighlight
      style={styles.touchable}
      key={item.id}
      underlayColor="#DDDDDD"
      onPress={() => goToRecipe(navigation, item)}
    >
      <View style={styles.itemContainer}>
        <Image style={styles.itemImg} source={item.img} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.view}>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListContent}
      />
    </View>
  );
}

export default HomeScreen;
