import { FlatList, ListRenderItem } from "react-native";
import React from "react";

import { Category } from "./ListItem";
import ListItem from "./ListItem";

type CheckBoxListProps = {
  items: Category[];
  setItems: (categories: Category[]) => void;
  HeaderComponent?: any;
};

const CheckboxList = ({ items, setItems, HeaderComponent }: CheckBoxListProps) => {
  function onCheckItem(index: number) {
    const isChecked = items[index].checked;
    const updatedItems = items.map((item) => {
      if (item.name === items[index].name) {
        item.checked = !isChecked;
      }
      return item;
    });

    setItems(updatedItems);
  }

  const renderItem: ListRenderItem<Category> = ({ item, index }) => (
    <ListItem item={item} index={index} onPress={onCheckItem}/>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      ListHeaderComponent={HeaderComponent}
    />
  );
};

export default CheckboxList;
