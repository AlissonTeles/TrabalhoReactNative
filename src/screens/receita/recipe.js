import * as React from "react";
import { SafeAreaView, View, Text, Button, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./style.js"; // Nosso estilo em outra pagina

function RecipeScreen({ navigation, route }) {
  const { item, navigator } = route.params;
  return (
    <SafeAreaView style={styles.recipe}>
      <ScrollView style={styles.scroll}>
        <View style={styles.recipe}>
          <Image style={styles.image} source={item.img} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.time}>{item.time}</Text>
          <Text style={styles.data}>{item.data}</Text>
          <Button
            style={styles.button}
            title="Voltar"
            onPress={() => navigation.navigate(navigator)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RecipeScreen;
