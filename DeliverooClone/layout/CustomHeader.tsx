import { View, Text, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

import SearchBar from "../components/SearchBar";
import IconButton from "../components/Buttons/IconButton";
import ImageButton from "../components/Buttons/ImageButton";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import OptionsBottomSheet from "./OptionsBottomSheet";

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <OptionsBottomSheet ref={bottomSheetRef} />

      <View style={styles.container}>
        <ImageButton
          image={require("../assets/images/bike.png")}
          onPress={openModal}
        />

        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={openModal}>
            <Text style={styles.title}>Delivery · Now</Text>
            <View style={styles.locationName}>
              <Text style={styles.subtitle}>San Francisco, CA</Text>
              <Ionicons name="chevron-down" color={Colors.primary} />
            </View>
          </TouchableOpacity>
        </View>

        <IconButton
          icon="person-outline"
          color={Colors.primary}
          link="/"
          style={{ backgroundColor: Colors.lightGrey }}
        />
      </View>
      <View style={styles.searchContainer}>
        <SearchBar placeholder="Restaurants, groceries, dishes" />
        <IconButton
          icon="options-outline"
          size={24}
          color={Colors.primary}
          link={"/(modal)/filter"}
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
