import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { FOODS, CATEGORIES } from "../data/dummy-data";
import FoodItem from "../components/FoodItem";
import FoodList from "../components/FoodList";

export default function FoodOverViewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const displayedFoods = FOODS.filter((foodItem) => {
    return foodItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    // categori isimlerini header title orak verme
    // useLayoutEffect kullanmadaki amac, gecislerdeki gecikmeyi engellemek
    const categoruTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoruTitle,
    });
  }, [navigation, categoryId]);

  return <FoodList items={displayedFoods} />;
}

const styles = StyleSheet.create({});
