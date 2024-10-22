import { View, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

type SearchBarProps = {
  placeholder: string;
};

const SearchBar = ({ placeholder }: SearchBarProps) => (
  <View style={styles.searchSection}>
    <Ionicons
      style={styles.searchIcon}
      name="ios-search"
      size={20}
      color={Colors.medium}
    />
    <TextInput style={styles.input} placeholder={placeholder} />
  </View>
);

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    fontSize: 14,
    color: Colors.mediumDark,
  },
  searchIcon: {
    paddingLeft: 10,
  },
});

export default SearchBar;
