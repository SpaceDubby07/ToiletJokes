import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FACTS } from "../data/QuoteData";

const Facts = (props) => {
  const [textValue, setTextValue] = useState("Hmmm"); // we call use state hook with initial value

  const len = FACTS.length;
  const changeTextValue = () => {
    setTextValue(FACTS[Math.floor(Math.random() * len)].facts); // we use setTextValue function that the hook returned for us
  };

  return (
    <View style={styles.container}>
      <View style={styles.quotecontainer}>
        <Text style={styles.quote}>{textValue}</Text>
      </View>

      <View style={styles.shitspiration}>
        <Button
          color="white"
          title="ROLL FOR SHIT FACTS"
          onPress={changeTextValue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  quotecontainer: {
    height: 300,
    padding: 20,
  },
  poop: {
    marginBottom: 40,
  },
  quote: {
    fontFamily: "eph-reg",
    fontSize: 36,
    color: "white",
    textAlign: "center",
    marginBottom: 60,
  },
  shitspiration: {
    backgroundColor: "#bd8605fc",
    marginTop: 240,
    borderRadius: 22,
  },
});

export default Facts;
