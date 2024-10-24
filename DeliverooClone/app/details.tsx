import {
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { restaurant } from "../assets/data/restaurant";
import Colors from "../constants/Colors";
import { useNavigation, Link } from "expo-router";
import IconButton from "../components/Buttons/IconButton";
import { ScrollView } from "react-native-gesture-handler";
import useBasketStore from "../store/basketStore";
import LongButton from "../components/Buttons/LongButton";

const Details = () => {
  const navigation = useNavigation();

  const DATA = restaurant.food.map((item, index) => ({
    title: item.category,
    data: item.meals,
    index,
  }));

  const { items, total } = useBasketStore();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerLeft: () => (
        <IconButton
          icon="ios-arrow-back"
          color={Colors.primary}
          link="/"
          style={{ backgroundColor: "white" }}
        />
      ),
      headerRight: () => (
        <View style={styles.buttonsContainer}>
          <IconButton
            icon="share-outline"
            color={Colors.primary}
            link="/"
            style={{ backgroundColor: "white" }}
          />
          <IconButton
            icon="search-outline"
            color={Colors.primary}
            link="/"
            style={{ backgroundColor: "white" }}
          />
        </View>
      ),
    });
  }, []);

  const renderItem: ListRenderItem<any> = ({ item, index }) => (
    <Link href={{ pathname: "/(modal)/dish", params: { id: item.id } }} asChild>
      <TouchableOpacity style={styles.item}>
        <View style={{ flex: 1 }}>
          <Text style={styles.dish}>{item.name}</Text>
          <Text style={styles.dishText}>{item.info}</Text>
          <Text style={styles.dishText}>${item.price}</Text>
        </View>
        <Image source={item.img} style={styles.dishImage} />
      </TouchableOpacity>
    </Link>
  );

  return (
    <>
      <View style={styles.detailsContainer}>
        <ScrollView>
          <Image source={restaurant.img} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.description}>{restaurant.about}</Text>
            <SectionList
              contentContainerStyle={{ paddingBottom: 50 }}
              keyExtractor={(item, index) => `${item.id + index}`}
              scrollEnabled={false}
              sections={DATA}
              renderItem={renderItem}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeparator} />
              )}
              SectionSeparatorComponent={() => (
                <View style={styles.sectionSeparator} />
              )}
              renderSectionHeader={({ section: { title, index } }) => (
                <Text style={styles.sectionHeader}>{title}</Text>
              )}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <LongButton title={`View Basket $${total}`} onPress={() => {}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: Colors.lightGrey,
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 15,
  },
  textContainer: {
    padding: 20,
  },
  image: {
    height: 250,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  description: {
    paddingVertical: 10,
    color: Colors.medium,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 40,
    margin: 16,
  },
  item: {
    backgroundColor: "#fff",
    padding: 16,
    flexDirection: "row",
  },
  dishImage: {
    height: 80,
    width: 80,
    borderRadius: 4,
  },
  dish: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dishText: {
    fontSize: 14,
    color: Colors.mediumDark,
    paddingVertical: 4,
  },
  itemSeparator: {
    marginHorizontal: 16,
    height: 1,
    backgroundColor: Colors.grey,
  },
  sectionSeparator: {
    height: 1,
    backgroundColor: Colors.grey,
  },
  footer: {
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 0,
    left: 0,
    width: "100%",
    elevation: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingTop: 15,
  },
});

export default Details;
