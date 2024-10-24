import { View, ScrollView, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Categories from "../layout/Categories";
import Restaurants from "../layout/Restaurants";
import Colors from "../constants/Colors";

const Page = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <ScrollView>
          <Categories />
          <Text style={styles.header}>Top picks in your neighborhood</Text>
          <Restaurants />
          <Text style={styles.header}>Offers near you</Text>
          <Restaurants />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    top: 25,
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export default Page;
