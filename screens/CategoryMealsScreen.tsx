import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const CategoryMealsScreen = ({ navigation } : any) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Button title='Go to Meal Details!' onPress={() => navigation.navigate('Meal Detail')} />
      <Button title="Go Back" onPress={() => {navigation.goBack()}} />
    </View>
  )
}

export default CategoryMealsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
