import React from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../screens/RootStackParams";
import Screen from "../components/Screen";
import LinearGradHeader from "../components/linearGradHeader";

type authScreenProp = StackNavigationProp<RootStackParamList, "Auth">;
const width = Dimensions.get("screen").width;

function AuthScreen() {
  const navigation = useNavigation<authScreenProp>();

  return (
    <Screen>
      <LinearGradHeader>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("appDetails")}>
            <Image
              source={require("../assets/unsplash-white-symbol.png")}
              style={styles.image_symbol}
              resizeMode="center"
            />
          </TouchableOpacity>
          <Image
            source={require("../assets/unsplash-full-logo.png")}
            style={styles.image}
            resizeMode="center"
          />
        </View>
      </LinearGradHeader>
      <Text style={{ color: "white" }}>Mahyank</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
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
  itemImagebackground: {
    flex: 1,
    flexDirection: "column-reverse",
    width: 500,
    height: 500,
  },
  sponsortagText: {
    color: "white",
    marginLeft: 10,
    marginBottom: 20,
    fontWeight: "bold",
  },
  sponsorText: {
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
  collectiontextColor: {
    color: "white",
    margin: 10,
  },
  categoryView: {
    flexDirection: "row",
    marginTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 10,
  },
});
export default AuthScreen;
