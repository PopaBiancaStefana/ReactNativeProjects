import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Button,
  Platform,
} from "react-native";

function CategoryGridTitle({ title, color, onPress }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        style={styles.button}
        android_ripple={{ color: "#cccccc" }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
});

export default CategoryGridTitle;
