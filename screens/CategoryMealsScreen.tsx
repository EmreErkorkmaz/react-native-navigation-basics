import React from 'react'
import { View, StyleSheet, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList';
import { CATEGORIES } from '../data/dummy-data';
import { MealsReducerState } from '../store/interfaces/mealsReducerInterfaces';

type CategoryMealsScreen = {
  navigation: NavigationStackProp
}


const CategoryMealsScreen = ({ navigation } : CategoryMealsScreen) => {
  
  const catId = navigation.getParam('categoryId');

  const availableMeals = useSelector((state: MealsReducerState) => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  if(displayMeals.length === 0) {
    return (
      <View style={styles.container}>
        <DefaultText>No Available Filtered Meals Found</DefaultText>
        <Button title='Go to Categories' onPress={() => {navigation.navigate('Categories')}}/>
      </View>
    )
  }

  return (
    <MealList listData={displayMeals} navigation={navigation}/>
  )
}

CategoryMealsScreen.navigationOptions = (navigationData: any) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory?.title
  }

}

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


