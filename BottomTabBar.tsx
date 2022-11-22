import React, { StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { MainBottomTabParamList } from "./screens/RootStackParams";
import HomeScreen from "./MainScreens.js/HomeScreen";
import DetailsScreen from "./MainScreens.js/Detail.Screen";
import MainScreen from "./MainScreens.js/Main";
import AuthScreen from "./MainScreens.js/Auth";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BlurView } from "expo-blur";

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function BottomMainScreen() {
  //   const BottomTabNavigationOptions:()  React.FC<Props> =  ({
  //     headerShown: false,
  //     tabBarStyle: {
  //       backgroundColor: "#000",
  //     },
  //     tabBarBackground: () => (
  //       <BlurView tint="dark" intensity={10} style={StyleSheet.absoluteFill} />
  //     ),
  // tabBarIcon: ({ focused, color, size }) => {
  //             let iconName;

  //             if (route.name === 'Home') {
  //               iconName = focused
  //                 ? 'ios-information-circle'
  //                 : 'ios-information-circle-outline';
  //             } else if (route.name === 'Settings') {
  //               iconName = focused ? 'ios-list' : 'ios-list-outline';
  //             }

  //             // You can return any component that you like here!
  //             return <Ionicons name={iconName} size={size} color={color} />;
  //           },
  //   });
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name == "Details") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name == "Main") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name == "Auth") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={"ios-list"} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#000",
        },
      })}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Details" component={DetailsScreen} />
      <BottomTab.Screen name="Main" component={MainScreen} />
      <BottomTab.Screen name="Auth" component={AuthScreen} />
    </BottomTab.Navigator>
  );
}

export default BottomMainScreen;
