import { View, StyleSheet, Text } from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ rounds, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title text="Game is over!" />
      <Text>
        Your phone needed {rounds} rounds to guess the number {userNumber}.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
