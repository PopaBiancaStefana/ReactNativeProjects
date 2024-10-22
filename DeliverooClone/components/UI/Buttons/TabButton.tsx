import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import Colors from "../../../constants/Colors";

type TabButtonProps = {
  title: string;
  isActive: boolean;
  //link or onPress
};

const TabButton = ({ title, isActive = false }: TabButtonProps) => {
  const [active, setIsActive] = useState(isActive);

  return (
    <TouchableOpacity
      style={active ? styles.toggleActive : styles.toggleInactive}
    >
      <Text style={active ? styles.activeText : styles.inactiveText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  activeText: {
    color: "#fff",
    fontWeight: "700",
  },
  toggleInactive: {
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  inactiveText: {
    color: Colors.primary,
  },
});
