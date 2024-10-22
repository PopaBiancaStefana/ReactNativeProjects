import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";

import Colors from "../../constants/Colors";

type SubheaderProps = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  link: string;
};

const Subheader = ({ title, icon, link }: SubheaderProps) => {
  return (
    <Link href={link as any} asChild>
    <TouchableOpacity>
      <View style={styles.item}>
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
    gap: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderColor: Colors.grey,
    borderWidth: 1,
  },
});

export default Subheader;
