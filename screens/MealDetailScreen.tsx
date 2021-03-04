import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';

const MealDetailScreen = ({ navigation }: any) => {
  const mealId = navigation.getParam('mealId');

  const selectedMeal: Meal | undefined = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal?.title}</Text>
      <Button title="Go Back to Categories" onPress={() => {navigation.popToTop()}} />
    </View>
  )
}

MealDetailScreen.navigationOptions = (navigationData: any) => {
  
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal?.title,
    headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Favorite" iconName='ios-star' onPress={() => {}}/></HeaderButtons>
  };
}

export default MealDetailScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
