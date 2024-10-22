import { StyleSheet, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import Colors from "../../constants/Colors";

type LongButtonProps = {
  title: string;
  onPress: () => {};
};

const LongButton = ({ title, onPress }: LongButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LongButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
