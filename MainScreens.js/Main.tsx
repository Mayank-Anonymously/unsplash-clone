import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../screens/RootStackParams";
import Screen from "../components/Screen";
import LinearGradHeader from "../components/linearGradHeader";
import TabViewExample from "../components/TopTab";

type mainScreenProp = StackNavigationProp<RootStackParamList, "Main">;
const width = Dimensions.get("screen").width;

function MainScreen() {
  const navigation = useNavigation<mainScreenProp>();
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
      <TabViewExample />
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
export default MainScreen;
