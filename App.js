import * as React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./src/screens/home/home";
import RecipeScreen from "./src/screens/receita/recipe";
import CategoryScreen from "./src/screens/categorias/category";
import ReceitasPopularesScreen from "./src/screens/receitasPopulares/receitas_populares";
import Icon from "react-native-vector-icons/FontAwesome5";
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#54d6c9",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ size }) => {
            return <Icon name="home" size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Receita"
        component={RecipeScreen}
        options={{
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
      <Drawer.Screen
        name="Categorias"
        component={CategoryScreen}
        options={{
          drawerIcon: ({ size }) => {
            return <Icon name="book" size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Receitas Populares"
        component={ReceitasPopularesScreen}
        options={{
          drawerIcon: ({ size }) => {
            return <Icon name="fire" size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
