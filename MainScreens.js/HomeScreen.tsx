import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";

import Screen from "../components/Screen";
import LinearGradHeader from "../components/linearGradHeader";
import Svg, { Circle } from "react-native-svg";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPhotos, Photos, selectPictures } from "../redux/slices/GetPhotos";
import { GetAllPhotos } from "../api-services/GetPhotos";
import SwiperFlatList from "react-native-swiper-flatlist";
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const width = Dimensions.get("screen").width;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const photos = useTypedSelector(selectPictures);
  useEffect(() => {
    GetAllPhotos({ dispatch });
  }, []);

  const Item = ({ data }: { data: Photos }) => (
    <View>
      {data.map((item) => (
        <ImageBackground
          source={{ uri: item.urls.regular }}
          style={styles.itemImagebackground}
        >
          <Text style={styles.sponsortagText}>
            {item.sponsorship === null ? "" : "Sponsored"}
          </Text>
          <Text style={styles.sponsorText}>
            {item.sponsorship === null
              ? item.user.name
              : item.sponsorship.sponsor.name}
          </Text>
        </ImageBackground>
      ))}
    </View>
  );

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
      <View style={{ margin: 30 }} />
      <FlatList
        data={photos}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item: Photos) => item.id}
      />
    </Screen>
  );
};

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
  child: { width: width, justifyContent: "center" },
  text: { fontSize: width * 0.5, textAlign: "center" },
});

export default HomeScreen;
