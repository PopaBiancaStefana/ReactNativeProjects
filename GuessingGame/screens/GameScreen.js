import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
     minBoundary = 1;
     maxBoundary = 100;
  },[]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Yes you lied", "I know", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  }

  return (
    <View style={styles.screen}>
      <Title text="Opponent's Guess" />
      <NumberContainer children={currentGuess}></NumberContainer>
      <View>
        <Title text="Higher or lower?" />
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            <AntDesign name="plus" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <AntDesign name="minus" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
      <View>
        {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 48,
  },
});
export default GameScreen;
