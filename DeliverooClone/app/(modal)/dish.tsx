import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getDishById } from "../../assets/data/restaurant"
import Colors from "../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
    FadeIn,
    FadeInLeft,
  } from "react-native-reanimated";
import LongButton from "../../components/Buttons/LongButton";
import useBasketStore from "../../store/basketStore";

const Dish = () => {
  const { id } = useLocalSearchParams();
  const item = getDishById(+id)!;
  const router = useRouter();
  const { addProduct } = useBasketStore();

  const addToCart = () => {
    addProduct(item);
    router.back();
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff" }}
      edges={["bottom"]}
    >
      <View style={styles.container}>
        <Animated.Image
          entering={FadeIn.duration(400).delay(200)}
          source={item?.img}
          style={styles.image}
        />
        <View style={{ padding: 20 }}>
          <Animated.Text
            entering={FadeInLeft.duration(400).delay(200)}
            style={styles.dishName}
          >
            {item?.name}
          </Animated.Text>
          <Animated.Text
            entering={FadeInLeft.duration(400).delay(400)}
            style={styles.dishInfo}
          >
            {item?.info}
          </Animated.Text>
        </View>

        <View style={styles.footer}>
            <LongButton title={`Add for $${item?.price}`} onPress={addToCart} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
  },
  dishName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  dishInfo: {
    fontSize: 16,
    color: Colors.mediumDark,
  },
  footer: {
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 0,
    left: 0,
    width: "100%",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingTop: 15,
  },
});

export default Dish;
