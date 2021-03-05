import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackProp } from 'react-navigation-stack';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

type FilterSwitchProps = {
  label: string,
  value: boolean,
  onChange: (value: boolean) => void
}

const FilterSwitch = ({label, value, onChange}: FilterSwitchProps) => {
  return(
    <View style={styles.filterContainer}>
        <Text>{label}</Text>
        <Switch 
          trackColor={{true: Colors.primaryColor, false: '#ccc'}} 
          thumbColor={Platform.OS === "android" ? Colors.primaryColor : ''}
          value={value} 
          onValueChange={onChange}
        />
      </View>
  )
}

type FilterScreenProps = {
  navigation: NavigationStackProp
}

const FiltersScreen = ({navigation} : FilterScreenProps) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetaian: isVegetarian
    }
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  useEffect(() => {
    navigation.setParams({save: saveFilters})
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch label='Gluten-free' value={isGlutenFree} onChange={(newValue) => setIsGlutenFree(newValue)} />
      <FilterSwitch label='Lactose-free' value={isLactoseFree} onChange={(newValue) => setIsLactoseFree(newValue)} />
      <FilterSwitch label='Vegan' value={isVegan} onChange={(newValue) => setIsVegan(newValue)} />
      <FilterSwitch label='Vegetarian' value={isVegetarian} onChange={(newValue) => setIsVegetarian(newValue)} />
    </View>
  )
}


FiltersScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  };
};

export default FiltersScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
})
