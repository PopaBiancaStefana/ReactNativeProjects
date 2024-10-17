import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealDetails from "../screens/MealDetailScreen";

function MealItem({ id, title, imageUrl}) {
    const navigation = useNavigation();

  function onItemPressHandler() {
    navigation.navigate("MealDetail", {
        mealId: id
    });
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={onItemPressHandler}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 16,
    fontSize: 16,
  },
});

export default MealItem;
