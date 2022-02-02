import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cover from "./screens/Cover/Cover";
import Problem from "./screens/Problem/Problem";
import Solution from "./screens/Solution/Solution";
import WhaleAnimation from "./screens/WhaleAnimation/WhaleAnimation";

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Cover"
      >
        <Screen name="Cover" component={Cover} />
        <Screen name="Problem" component={Problem} />
        <Screen name="Solution" component={Solution} />
        <Screen name="WhaleAnimation" component={WhaleAnimation} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
