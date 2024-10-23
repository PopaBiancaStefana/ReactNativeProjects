import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import Colors from "../../../constants/Colors";

export interface Category {
  name: string;
  count: number;
  checked?: boolean;
}

type ListItemProps = {
  item: Category;
  index: number;
  onPress: (index: number) => void;
};

const ListItem = ({ item, index, onPress }: ListItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>
        {item.name} ({item.count})
      </Text>
      <BouncyCheckbox
        isChecked={item.checked}
        fillColor={Colors.primary}
        //unfillColor="#fff"
        iconStyle={{
          borderColor: Colors.primary,
          borderRadius: 4,
          borderWidth: 2,
        }}
        innerIconStyle={{ borderColor: Colors.primary, borderRadius: 4 }}
        onPress={() => onPress(index)}
        style={styles.checkbox}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: Colors.grey,
  },
  itemText: {
    flex: 1,
  },
  checkbox: {
    width: 40,
  },
});

export default ListItem;
