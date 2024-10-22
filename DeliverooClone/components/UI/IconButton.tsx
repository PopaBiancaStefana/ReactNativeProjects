import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Link } from "expo-router";

type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  size: number;
  link: string;
  style?: {};
};

const IconButton = ({ icon, color, size, link, style }: IconButtonProps) => {
  return (
    <Link href={link as any} asChild>
      <TouchableOpacity style={[styles.iconButton, style]}>
        <Ionicons name={icon} size={size} color={color} />
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    padding: 10,
    borderRadius: 50,
  },
});

export default IconButton;
