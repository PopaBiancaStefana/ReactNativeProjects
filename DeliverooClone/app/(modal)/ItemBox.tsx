import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Subheader from "../../components/Subheader";

const ItemBox = () => {
  return (
    <>
      <View style={styles.itemContainer}>
        <Subheader
          title="Sort"
          icon="arrow-down-outline"
          link="/"
          style={styles.item}
        />
        <Subheader
          title="Hygiene rating"
          icon="fast-food-outline"
          link="/"
          style={styles.item}
        />
        <Subheader
          title="Offers"
          icon="pricetag-outline"
          link="/"
          style={styles.item}
        />
        <Subheader
          title="Dietary"
          icon="nutrition-outline"
          link="/"
          style={[styles.item, styles.lastItem]}
        />
      </View>
      <Text style={styles.header}>Categories</Text>
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
    marginBottom: 24,
  },
  item: {
    padding: 10,
    borderTopWidth: 0,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default ItemBox;
