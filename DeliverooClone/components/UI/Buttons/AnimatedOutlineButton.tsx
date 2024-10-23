import { StyleSheet } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

import Colors from "../../../constants/Colors";

type AnimatedOutlineButtonProps = {
  title: string;
  onPress: () => void;
  containerStyle?: {};
  textStyle?: {};
  animatedContainerStyle?: any;
  animatedTextStyle?: any;
};

const AnimatedOutlineButton = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  animatedContainerStyle,
  animatedTextStyle,
}: AnimatedOutlineButtonProps) => {
  return (
    <Animated.View
      style={[styles.outlineButton, animatedContainerStyle, containerStyle]}
    >
      <TouchableOpacity onPress={onPress}>
        <Animated.Text
          style={[styles.outlineButtonText, animatedTextStyle, textStyle]}
        >
          {title}
        </Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  outlineButton: {
    borderColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderRadius: 8,
    height: 56,
    marginVertical: 16,
    //padding: 16,
  },
  outlineButtonText: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AnimatedOutlineButton;
