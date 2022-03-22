import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { QUOTE } from "../data/QuoteData";
import LottieView from "lottie-react-native";

const Quote = (props) => {
  const [textValue, setTextValue] = useState("Hmmm"); // we call use state hook with initial value
  const len = QUOTE.length;
  const changeTextValue = () => {
    setTextValue(QUOTE[Math.floor(Math.random() * len)].quote); // we use setTextValue function that the hook returned for us
  };

  return (
    <View style={styles.container}>
      <View style={styles.quotecontainer}>
        <Text style={styles.quote}>{textValue}</Text>
      </View>

      <LottieView
        style={styles.poop}
        source={require("../assets/gifs/poo.json")}
        loop
        autoPlay
      />

      <View style={styles.shitspiration}>
        <Button
          color="white"
          title="ROLL FOR SHITSPIRATION"
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

export default Quote;
