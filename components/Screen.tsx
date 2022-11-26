import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
export type homeProps = {
  children: any;
};
const Screen: React.FC<homeProps> = ({ children }) => {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#000" }}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;
