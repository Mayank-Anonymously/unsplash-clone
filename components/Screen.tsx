import React from "react";
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
export type homeProps = {
  children: any;
};
const Screen: React.FC<homeProps> = ({ children }) => {
  return <View style={{ flex: 1, backgroundColor: "#eee" }}>{children}</View>;
};

export default Screen;
