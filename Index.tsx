import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./screens/RootStackParams";
import BottomMainScreen from "./BottomTabBar";
import { StackNavigationOptions } from "@react-navigation/stack";

const Stack = createStackNavigator<RootStackParamList>();

export default function Index() {
  const options: StackNavigationOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="Mayank" component={BottomMainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
