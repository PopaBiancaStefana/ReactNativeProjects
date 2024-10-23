import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";

import Colors from "../../constants/Colors";
import LongButton from "../../components/UI/Buttons/LongButton";
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useNavigation } from "expo-router";
import categories from "../../assets/data/filter.json";
import ItemBox from "../../components/ItemBox";
import CheckboxList from "../../components/UI/CheckboxList/CheckboxList";
import { Category } from "../../components/UI/CheckboxList/ListItem";
import AnimatedOutlineButton from "../../components/UI/Buttons/AnimatedOutlineButton";

const Filter = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<Category[]>(categories);
  const [selected, setSelected] = useState<Category[]>([]);
  const flexWidth = useSharedValue(0);
  const scale = useSharedValue(0);

  useEffect(() => {
    const hasSelected = selected.length > 0;
    const selectedItems = items.filter((item) => item.checked);
    const newSelected = selectedItems.length > 0;

    if (hasSelected !== newSelected) {
      flexWidth.value = withTiming(newSelected ? 150 : 0);
      scale.value = withTiming(newSelected ? 1 : 0);
    }

    setSelected(selectedItems);
  }, [items]);

  function handleSetSelected(categories: Category[]) {
    setItems(categories);
  }

  const handleClearAll = () => {
    const updatedItems = items.map((item) => {
      item.checked = false;
      return item;
    });
    setItems(updatedItems);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: flexWidth.value,
      opacity: flexWidth.value > 0 ? 1 : 0,
    };
  });

  const animatedText = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={styles.container}>
      <CheckboxList
        items={categories}
        setItems={handleSetSelected}
        HeaderComponent={ItemBox}
      />
      <View style={{ height: 80 }} />
      <View style={styles.footer}>
        <View style={styles.btnContainer}>
          <AnimatedOutlineButton
            title="Clear All"
            onPress={handleClearAll}
            animatedContainerStyle={animatedStyles}
            animatedTextStyle={animatedText}
          />
          <View style={{ flex: 1 }}>
            <LongButton
              title="Done"
              onPress={() => navigation.goBack()}
              style={styles.fullButton}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGrey,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "white",
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
  fullButton: {
    margin: 0,
    marginRight: 10,
    height: 56,
  },
  btnContainer: {
    flexDirection: "row",
    padding: 5,
    marginHorizontal: 15,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Filter;
