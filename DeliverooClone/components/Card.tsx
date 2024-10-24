import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Link, Href } from "expo-router";

type CardProps = {
  height: number;
  width: number;
  imageSource: ImageSourcePropType;
  imageStyle?: {};
  link: Href<string>;
  children?: React.ReactNode;
};

const Card = ({
  height = 100,
  width = 100,
  imageSource,
  imageStyle,
  link,
  children,
}: CardProps) => {
  return (
    <Link href={link} asChild>
      <TouchableOpacity style={styles.shadowContainer}>
        <View style={[styles.cardContainer, { height: height, width: width }]}>
          <Image
            style={[styles.imageContainer, imageStyle]}
            source={imageSource}
          />
          {children}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    marginHorizontal: 5,
    borderRadius: 8,
    overflow: "hidden",
  },
  shadowContainer: {
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
  },
  imageContainer: {
    flex: 1,
    width: undefined,
  },
});

export default Card;
