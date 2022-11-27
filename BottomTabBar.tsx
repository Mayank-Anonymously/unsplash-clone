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
  const GetHomeIcon = (focused: boolean, color: string) => {
    return <Ionicons name="images" size={24} color={color} />;
  };
  const GetSearchIcon = (focused: boolean, color: string) => {
    return <Ionicons name="search" size={24} color={color} />;
  };
  const GetAddIcon = (focused: boolean, color: string) => {
    return <Ionicons name="ios-add-circle-outline" size={24} color={color} />;
  };
  const GetProfileIcon = (focused: boolean, color: string) => {
    return <Ionicons name="alert-circle-sharp" size={24} color={color} />;
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
        options={{
          tabBarIcon: ({ focused, color }) => GetHomeIcon(focused, color),
        }}
      />
      <BottomTab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => GetSearchIcon(focused, color),
        }}
      />
      <BottomTab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused, color }) => GetAddIcon(focused, color),
        }}
      />
      <BottomTab.Screen
        name="Auth"
        component={AuthScreen}
        options={{
          tabBarIcon: ({ focused, color }) => GetProfileIcon(focused, color),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomMainScreen;
