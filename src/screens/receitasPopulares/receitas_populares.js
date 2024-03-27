import * as React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  VirtualizedList,
} from "react-native";
import { data } from "../../data/data.js"; // Nosso json com os dados
import styles from "./style.js"; // Nosso estilo em outra pagina
function goToRecipe(navigation, item) {
  navigation.navigate("Receita", { item, navigator: "Receitas Populares" });
}

function ReceitasPopularesScreen({ navigation }) {
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
        <Text style={styles.acessos}>Acessos: {item.acessos}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </TouchableHighlight>
  );

  const getItem = (data, index) => {
    // Pego os itens com mais acessos
    return data.sort((a, b) => b.acessos - a.acessos)[index];
  };

  return (
    <View style={styles.view}>
      <VirtualizedList
        getItemCount={() => data.length} // quantidade de itens para mostrar
        data={data} // usa isso para pegar os itens do meu json
        getItem={(data, index) => getItem(data, index)} // pega os itens
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListContent}
      />
    </View>
  );
}

export default ReceitasPopularesScreen;
