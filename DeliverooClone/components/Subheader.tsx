import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link, Href } from "expo-router";

import Colors from "../constants/Colors";

type SubheaderProps = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  link: Href<string>;
  style?: {};
};

const Subheader = ({ title, icon, link, style }: SubheaderProps) => {
  return (
    <Link href={link} asChild>
      <TouchableOpacity>
        <View style={[styles.item, style]}>
          <Ionicons name={icon} size={24} color={Colors.medium} />
          <Text style={styles.title}>{title}</Text>
          <Ionicons name="chevron-forward" size={24} color={Colors.primary} />
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    padding: 12,
    borderColor: Colors.grey,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    backgroundColor: "white",
  },
});

export default Subheader;
