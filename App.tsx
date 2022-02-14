import { Jost_400Regular, Jost_500Medium } from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import "./src/i18n/index";
import Routes from "./src/routes";

export default function App() {
  const [fontLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}
