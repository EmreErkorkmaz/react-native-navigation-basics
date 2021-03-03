import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Meal from '../models/meal';

const CategoryMealsScreen = ({ navigation } : any) => {
  const renderMealItem = (itemData: {item: Meal}) => {
    return (
      <MealItem itemData={itemData} onSelectMeal={() => {}}/>
    );
  }

  const catId = navigation.getParam('categoryId');

  const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  return (
    <View style={styles.screen}>
      <FlatList data={displayMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} style={{width: '100%'}}/>
    </View>
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
