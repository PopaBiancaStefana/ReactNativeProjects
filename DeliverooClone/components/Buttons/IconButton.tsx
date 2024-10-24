import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Link, Href } from "expo-router";

type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  size?: number;
  link: Href<string>;
  style?: {};
};

const IconButton = ({
  icon,
  color,
  size = 22,
  link,
  style,
}: IconButtonProps) => {
  return (
    <Link href={link} asChild>
      <TouchableOpacity>
        <View style={[styles.iconButton, style]}>
          <Ionicons name={icon} size={size} color={color} />
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    padding: 8,
    borderRadius: 50,
  },
});

export default IconButton;
