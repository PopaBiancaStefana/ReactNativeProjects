import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [fetchedMsg, setFetchedMsg] = useState();

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios
      .get(
        "https://expensetracker-d0581-default-rtdb.firebaseio.com/message.json?auth=" +
          token
      )
      .then((response) => {
        setFetchedMsg(response.data);
      });
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMsg}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
