import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cover from "./screens/Cover/Cover";
import WhaleMenu from "./screens/WhaleMenu/WhaleMenu";
import WhaleAnimation from "./screens/WhaleAnimation/WhaleAnimation";
import "../src/i18n/index";

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Cover"
      >
        <Screen name="Cover" component={Cover} />
        <Screen name="WhaleMenu" component={WhaleMenu} />
        <Screen name="WhaleAnimation" component={WhaleAnimation} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
