import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function CategoriesScreen({ navigation }) {

  function RenderCategory(itemData) {
    function onPressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={RenderCategory}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
