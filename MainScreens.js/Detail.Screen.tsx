import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import LinearGradHeader from "../components/linearGradHeader";
import Screen from "../components/Screen";
const width = Dimensions.get("screen").width;

function DetailsScreen() {
  return (
    <Screen>
      <LinearGradHeader>
        <View style={styles.container}>
          <Image
            source={require("../assets/unsplash-white-symbol.png")}
            style={styles.image_symbol}
            resizeMode="center"
          />
          <Image
            source={require("../assets/unsplash-full-logo.png")}
            style={styles.image}
            resizeMode="center"
          />
        </View>
      </LinearGradHeader>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    width: width / 1.6,
  },
  image_symbol: {
    height: 50,
    width: 50,
  },
  image: {
    height: 50,
    width: 100,
  },
});

export default DetailsScreen;
