import { TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from "react-native";
import React from "react";

type ImageButtonProps = {
  image: ImageSourcePropType
  size?: number;
  onPress?: () => void;
  style?: {};
};

const ImageButton = ({
  image,
  onPress,
  size = 30,
  style,
}: ImageButtonProps) => {
  return (
    <TouchableOpacity style={[styles.imageButton, style]} onPress={onPress}>
      <Image style={{ width: size, height: size }} source={image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageButton: {
    padding: 10,
  },
});

export default ImageButton;
