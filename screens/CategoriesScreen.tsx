import React from "react";
import { StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }: any) => {
  const renderGridItem = (itemData: any) => {
    return (
      <CategoryGridTile 
      title={itemData.item.title} 
      color={itemData.item.color}
      onSelect={() => {
        navigation.navigate({
        routeName: "Category Meals",
        params: {
          categoryId: itemData.item.id,
        },
      });}} />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    justifyContent: 'center',
    margin: 15,
    paddingHorizontal: 50,
    height: 150,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
  },
});
