import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack';
import { useSelector } from 'react-redux';
import Meal from '../models/meal'
import { MealsReducerState } from '../store/interfaces/mealsReducerInterfaces';
import MealItem from './MealItem';

type MealListProps = {
  listData: Meal [];
  navigation: NavigationStackProp
}

const MealList = ({listData, navigation}: MealListProps) => {
  const favoriteMeals = useSelector((state: MealsReducerState) => state.meals.favoriteMeals)

  const renderMealItem = (itemData: {item: Meal}) => {
    return (
      <MealItem itemData={itemData} onSelectMeal={() => {navigation?.navigate({
        routeName: 'Meal Detail',
        params: {
          mealId: itemData.item.id,
          mealTitle: itemData.item.title,
          isFav: favoriteMeals.some(meal => meal.id === itemData.item.id)
        }
      })}}/>
    );
  }

  return (
    <View style={styles.list}>
      <FlatList data={listData} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} style={{width: '100%'}}/>
    </View>
  )
}

export default MealList

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
})
