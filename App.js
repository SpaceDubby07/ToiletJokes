import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import QuoteNavigator from "./navigation/navigation";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "eph-reg": require("./assets/fonts/Ephesis-Regular.ttf"),
  });
};

export default function App() {
  // used for loading fonts, load them once data is loaded
  const [fontLoaded, setFontLoaded] = useState(false);

  // Data not loaded, then fetch fonts, when finished load data
  // otherwise log an error to console
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <QuoteNavigator />;
}
