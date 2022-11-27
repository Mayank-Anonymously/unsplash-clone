import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { DEATILS } from "../static/DetailsRouterApi";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  MainBottomTabParamList,
  RootStackParamList,
} from "../screens/RootStackParams";
import { useNavigation } from "@react-navigation/native";
const height = Dimensions.get("screen").height;
type authScreenProp = StackNavigationProp<MainBottomTabParamList, "Auth">;

const Separtor = () => {
  return <View style={styles.seperator} />;
};
const Details = () => {
  const navigation = useNavigation<authScreenProp>();

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <SafeAreaView>
        <TouchableOpacity
          activeOpacity={9}
          style={styles.GoBack}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="ios-return-up-back" color="white" size={30} />
          <Text style={styles.optionsText}>Go back</Text>
        </TouchableOpacity>
        <View style={styles.AppinfoView}>
          <Image
            source={require("../assets/unsplash-white-symbol.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/unsplash-full-logo.png")}
            style={styles.image}
          />
          <View>
            <Text style={{ color: "gray" }}>v2.11(130)</Text>
          </View>
        </View>
        <View style={styles.optionsMainView}>
          {DEATILS.map((item) => {
            return (
              <View>
                <Text style={styles.optionsText}>{item.text}</Text>
                <Separtor />
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  seperator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
  },
  AppinfoView: {
    backgroundColor: "#2b2b29",
    height: height / 4,
    marginTop: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  optionsMainView: {
    backgroundColor: "#2b2b29",
    height: height / 4,
    marginTop: "30%",
  },
  optionsText: {
    color: "white",
    margin: 12,
    fontSize: 12,
  },
  image: { resizeMode: "center", height: height / 16, width: 200 },
  GoBack: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 10,
  },
});
