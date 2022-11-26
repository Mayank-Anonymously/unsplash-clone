import React, { StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { MainBottomTabParamList } from "./screens/RootStackParams";
import HomeScreen from "./MainScreens.js/HomeScreen";
import DetailsScreen from "./MainScreens.js/SearchScreen";
import MainScreen from "./MainScreens.js/Main";
import AuthScreen from "./MainScreens.js/Auth";
import Ionicons from "react-native-vector-icons/Ionicons";

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function BottomMainScreen() {
  const GetHomeIcon = (focused: boolean) => {
    return <Ionicons name="images" size={24} color={"white"} />;
  };
  const GetSearchIcon = (focused: boolean) => {
    return <Ionicons name="search" size={24} color={"white"} />;
  };
  const GetAddIcon = (focused: boolean) => {
    return <Ionicons name="ios-add-circle-outline" size={24} color={"white"} />;
  };
  const GetProfileIcon = (focused: boolean) => {
    return <Ionicons name="alert-circle-sharp" size={24} color={"white"} />;
  };
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#000",
        },
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: ({ focused }) => GetHomeIcon(focused) }}
      />
      <BottomTab.Screen
        name="Details"
        component={DetailsScreen}
        options={{ tabBarIcon: ({ focused }) => GetSearchIcon(focused) }}
      />
      <BottomTab.Screen
        name="Main"
        component={MainScreen}
        options={{ tabBarIcon: ({ focused }) => GetAddIcon(focused) }}
      />
      <BottomTab.Screen
        name="Auth"
        component={AuthScreen}
        options={{ tabBarIcon: ({ focused }) => GetProfileIcon(focused) }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomMainScreen;
