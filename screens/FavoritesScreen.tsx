import React from 'react'
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

type FavoriteScreenProps = {
  navigation: any
}

const FavoritesScreen = ({navigation}: FavoriteScreenProps) => {
  const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === 'm2')
  return <MealList listData={favMeals} navigation= {navigation}/>
}

FavoritesScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => {
          navData.navigation.toggleDrawer();
        }} />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen

