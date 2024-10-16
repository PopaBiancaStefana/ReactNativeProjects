import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
      borderWidth: 4,
      borderColor: 'white',
      padding: 24,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    numberText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 32,
    },
  });