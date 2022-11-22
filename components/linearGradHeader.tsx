import React, { Children } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
export type homeProps = {
  children: any;
};
const LinearGradHeader: React.FC<homeProps> = ({ children }) => {
  return (
    <LinearGradient colors={["#000", "transparent"]} style={styles.background}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
  },
});

export default LinearGradHeader;
