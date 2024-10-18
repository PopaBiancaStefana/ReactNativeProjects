import { Text, StyleSheet, Image, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealDetailScreen({ route, navigation }) {
  const favoriteMeals = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealsIsFavorite = favoriteMeals.includes(mealId);

  function headerButtonPressedHandler() {
    if (mealsIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealsIsFavorite ? "star" : "staro"}
            color="black"
            onPress={headerButtonPressedHandler}
          ></IconButton>
        );
      },
    });
  }, [navigation, headerButtonPressedHandler]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <Text style={styles.subtitle}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient} style={styles.text}>
          {ingredient}
        </Text>
      ))}

      <Text style={styles.subtitle}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step} style={styles.text}>
          {step}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    margin: 12,
    textAlign: "center",
    fontSize: 20,
  },
  subtitle: {
    fontWeight: "bold",
    margin: 6,
    fontSize: 16,
  },
  text: {
    margin: 4,
  },
});

export default MealDetailScreen;
