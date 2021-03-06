import React from 'react'
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';
import { NavigationStackProp } from 'react-navigation-stack';
import { MealsReducerState } from '../store/interfaces/mealsReducerInterfaces';
import { View, Button, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

type FavoriteScreenProps = {
  navigation: NavigationStackProp
}

const FavoritesScreen = ({navigation}: FavoriteScreenProps) => {

  const favMeals = useSelector((state: MealsReducerState) => state.meals.favoriteMeals);

  if(favMeals.length === 0 || !favMeals) {
    return (
    <View style={styles.container}>
      <DefaultText>No favorite meals selected. Start adding some!</DefaultText>
      <Button title="Go to Categories" onPress={() => {navigation.navigate('Categories')}} />
    </View>
    )
  }

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

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
});

