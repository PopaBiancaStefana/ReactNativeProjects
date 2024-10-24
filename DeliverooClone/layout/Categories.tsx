import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { categories } from "../assets/data/home";
import HorizontalScroll from "../components/HorizontalScroll";
import { Link } from "expo-router";
import Card from "../components/Card";

const Categories = () => {
  return (
    <HorizontalScroll
      data={categories}
      renderItem={(category, index) => (
        <Card
          height={100}
          width={100}
          imageSource={category.img}
          link="/"
          key={index}
        >
          <Text style={styles.categoryText}>{category.text}</Text>
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
  categoryText: {
    padding: 10,
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default Categories;
