import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Quote from "../components/Quote";

const QuoteScreen = (props) => {
  return (
    <View style={styles.container}>
      <Quote />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7b5804",
  },
});

QuoteScreen.navigationOptions = {
  headerTitle: "Poop Quotes",
};

export default QuoteScreen;
