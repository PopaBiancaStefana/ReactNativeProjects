import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <Text style={styles.subtitle}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient} style={styles.text}>{ingredient}</Text>
      ))}

      <Text style={styles.subtitle}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step} style={styles.text}>{step}</Text>
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
  }
});

export default MealDetailScreen;
