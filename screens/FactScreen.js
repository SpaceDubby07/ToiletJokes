import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Facts from "../components/Facts";

const FactScreen = (props) => {
  return (
    <View style={styles.container}>
      <Facts />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7b5804",
  },
});

FactScreen.navigationOptions = {
  headerTitle: "Poop Facts",
};

export default FactScreen;
