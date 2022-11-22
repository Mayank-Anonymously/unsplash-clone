import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import Screen from "../components/Screen";
import LinearGradHeader from "../components/linearGradHeader";
import Svg, { Circle } from "react-native-svg";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { useSelector } from "react-redux";
import { selectTodos } from "../redux/slices/GetPhotos";
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const width = Dimensions.get("screen").width;
const HomeScreen = () => {
  const photos = useTypedSelector(selectTodos);

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
};

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

export default HomeScreen;
