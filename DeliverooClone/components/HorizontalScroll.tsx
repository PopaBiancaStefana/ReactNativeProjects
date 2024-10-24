import { ScrollView, StyleSheet } from "react-native";
import React from "react";

type HorizontalScrollProps = {
  data: any[];
  renderItem: (item: any, index: number) => JSX.Element;
};

const HorizontalScroll = ({ data, renderItem }: HorizontalScrollProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {data.map(renderItem)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default HorizontalScroll;
