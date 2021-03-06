import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackProp } from "react-navigation-stack";
import { useDispatch, useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import HeaderButton from "../components/HeaderButton";
import { toggleFavorite } from '../store/actions/meals';

import Meal from "../models/meal";
import { MealsReducerState } from '../store/interfaces/mealsReducerInterfaces';


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
  
  const availableMeals = useSelector((state: MealsReducerState) => state.meals.meals);
  const mealId = navigation?.getParam("mealId");
  const currentMealIsFavorite: boolean = useSelector((state: MealsReducerState) => state.meals.favoriteMeals.some(meal => meal.id === mealId));

  const selectedMeal: Meal | undefined = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
  }, [dispatch, mealId])

  useEffect(() => {
    // navigation?.setParams({ mealTitle: selectedMeal?.title });
    navigation?.setParams({
      toggleFav: toggleFavoriteHandler,
      
    })
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation?.setParams({
      isFav: currentMealIsFavorite
    })
  }, [currentMealIsFavorite])

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
  // const mealId = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const isFavorite = navigationData.navigation.getParam('isFav');

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName={isFavorite? "ios-star" : "ios-star-outline"} onPress={toggleFavorite} />
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
