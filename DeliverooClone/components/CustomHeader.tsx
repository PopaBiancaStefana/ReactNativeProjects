import { View, Text, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

import SearchBar from "./SearchBar";
import IconButton from "./UI/IconButton";
import ImageButton from "./UI/ImageButton";
import BottomSheet from "./BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={bottomSheetRef} />

      <View style={styles.container}>
        <ImageButton
          image={require("../assets/images/bike.png")}
          onPress={openModal}
        />

        <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
          <Text style={styles.title}>Delivery Now</Text>
          <View style={styles.locationName}>
            <Text style={styles.subtitle}>San Francisco, CA</Text>
            <Ionicons name="chevron-down" size={24} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <IconButton
          icon="person-outline"
          size={24}
          color={Colors.primary}
          link="/"
          style={{ backgroundColor: Colors.grey }}
        />
      </View>
      <View style={styles.searchContainer}>
        <SearchBar placeholder="Restaurants, groceries, dishes" />
        <IconButton
          icon="options-outline"
          size={24}
          color={Colors.primary}
          link={"/(modal)/filter" as any}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  locationName: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    height: 60,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
});

export default CustomHeader;
