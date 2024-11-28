import { StyleSheet, View, Text } from "react-native";
import React from "react";

import { restaurants } from "../assets/data/home";
import Card from "../components/Card";
import HorizontalScroll from "../components/HorizontalScroll";
import Colors from "../constants/Colors";

const Restaurants = () => {
  return (
    <HorizontalScroll
      data={restaurants}
      renderItem={(restaurant, index) => (
          <Card
            height={250}
            width={300}
            imageSource={restaurant.img}
            imageStyle={styles.imageContainer}
            link="/details"
            key={index}
          >
            <View style={styles.restaurantBox}>
              <Text style={styles.titleText}>{restaurant.name}</Text>
              <Text style={[styles.subtitleText, { color: Colors.green }]}>
                {restaurant.rating} {restaurant.rating}
              </Text>
              <Text style={[styles.subtitleText, { color: Colors.medium }]}>
                {restaurant.distance} · {restaurant.duration}h
              </Text>
            </View>
          </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
  restaurantBox: {
    flex: 2,
    padding: 14,
  },
  titleText: {
    paddingVertical: 4,
    fontSize: 14,
    fontWeight: "bold",
  },
  subtitleText: {
    paddingVertical: 2,
  },
  imageContainer: {
    flex: 5,
    width: undefined,
  },
});

export default Restaurants;
