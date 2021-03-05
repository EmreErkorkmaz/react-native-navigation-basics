import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackProp } from "react-navigation-stack";
import DefaultText from "../components/DefaultText";
import HeaderButton from "../components/HeaderButton";

import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

type ListItemProps = {
  children?: React.ReactNode
}

const ListItem = ({children}: ListItemProps) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  );
}

type MealDetailProps = {
  navigation?: NavigationStackProp;
};

const MealDetailScreen = ({ navigation }: MealDetailProps) => {
  const mealId = navigation?.getParam("mealId");

  const selectedMeal: Meal | undefined = MEALS.find(
    (meal) => meal.id === mealId
  );

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <View>
        <View style={styles.details}>
          <DefaultText>{selectedMeal?.duration}m</DefaultText>
          <DefaultText>{selectedMeal?.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{selectedMeal?.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal?.ingredients.map((ingredient, index) => (
          <ListItem key={ingredient}>{index + 1}{`)`} {ingredient}</ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal?.steps.map((step, index) => (
          <ListItem key={step}>{index + 1}{`)`} {step}</ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData: any) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal?.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});
