import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';


const CategoriesScreen = ({ navigation } : any) => {
  
  const renderGridItem = (itemData: any) => {
    return (
      <TouchableOpacity style={styles.gridItem} onPress={() => {navigation.navigate('Category Meals')}}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <FlatList keyExtractor={(item, index) => item.id} numColumns={2} data={CATEGORIES} renderItem={renderGridItem}/>
  )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2
  }
})
