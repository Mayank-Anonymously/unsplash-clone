import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./screens/RootStackParams";
import BottomMainScreen from "./BottomTabBar";
import { StackNavigationOptions } from "@react-navigation/stack";
import Details from "./MainScreens.js/details";
import { View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator<RootStackParamList>();

export default function Index() {
  const options: StackNavigationOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="BottomTab" component={BottomMainScreen} />
        <Stack.Screen name="appDetails" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
