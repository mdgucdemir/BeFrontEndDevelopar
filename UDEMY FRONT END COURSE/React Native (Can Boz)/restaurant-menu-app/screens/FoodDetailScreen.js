import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import { FOODS } from "../data/dummy-data";
import FoodIngredients from "../components/FoodIngredients";
import { AntDesign } from "@expo/vector-icons";
import { FavoritesContext } from "../store/favoritesContext";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, reomveFavorite } from "../store/redux/favorites";

export default function FoodDetailScreen({ route, navigation }) {
  const favoriteFoodContext = useContext(FavoritesContext);
  // const favoriteFoodsIds = useSelector((state) => state.favoriteFoods.ids);
  const foodId = route.params.foodId;
  const selectedFood = FOODS.find((food) => food.id === foodId);

  // const dispatch = useDispatch();

  const foodIsFavorites = favoriteFoodContext.ids.includes(foodId);
  // const foodIsFavorites = favoriteFoodsIds.includes(foodId);

  const pressHandler = () => {
    if (foodIsFavorites) {
      favoriteFoodContext.removeFavorite(foodId);
      // dispatch(reomveFavorite({ id: foodId }));
    } else {
      favoriteFoodContext.addFavorite(foodId);
      // dispatch(addFavorite({ id: foodId }));
    }
  };

  useLayoutEffect(() => {
    const foodTitle = FOODS.find((food) => food.id === foodId).title;

    navigation.setOptions({
      title: foodTitle,
      headerRight: () => {
        return (
          <Pressable
            onPress={pressHandler}
            style={({ pressed }) => pressed && styles.iconPressed}
          >
            <AntDesign
              name={foodIsFavorites ? "star" : "staro"}
              size={24}
              color={foodIsFavorites ? "gold" : "white"}
            />
          </Pressable>
        );
      },
    });
  }, [navigation, pressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedFood.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedFood.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
        <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Icindekiler</Text>
        </View>
        <FoodIngredients data={selectedFood.ingredients} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 50,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  image: {
    width: "100%",
    height: 300,
  },
  listContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  subTitleContainer: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "orange",
    marginVertical: 5,
  },
  subTitle: {
    color: "orange",
    fontSize: 24,
    fontWeight: "bold",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 14,
    color: "red",
    textTransform: "capitalize",
  },
  iconPressed: {
    opacity: 0.5,
  },
});
