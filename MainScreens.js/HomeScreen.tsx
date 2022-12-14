import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  ImageBackground,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Screen from "../components/Screen";
import LinearGradHeader from "../components/linearGradHeader";
import Svg, { Circle } from "react-native-svg";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPhotos, Photos, selectPictures } from "../redux/slices/GetPhotos";
import { GetAllPhotos } from "../api-services/GetPhotos";
import { GetAllCollections } from "../api-services/GetAllCollections";
import { GetAllCollection } from "../redux/slices/GetAllCollections";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../screens/RootStackParams";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
type navigationProp = StackNavigationProp<RootStackParamList, "Auth">;

const width = Dimensions.get("screen").width;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const photos = useTypedSelector(selectPictures);
  const Collection = useTypedSelector(GetAllCollection);
  const navigation = useNavigation<navigationProp>();
  const [urlState, setUrlState] = useState("");
  const ColData = Collection[0];
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout: any) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    GetAllPhotos({ dispatch, urlState });
    GetAllCollections({ dispatch });
  }, []);

  const Item = ({ data }: { data: Photos }) => (
    <View>
      {data.map((item: any) => (
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

      <View style={styles.categoryView}>
        {ColData == undefined ? (
          <Text>Wait</Text>
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {ColData.map((item: any) => {
              return (
                <Text
                  style={styles.collectiontextColor}
                  onPress={() => alert(item.links.photos)}
                >
                  {item.title}
                </Text>
              );
            })}
          </ScrollView>
        )}
      </View>
      <FlatList
        data={photos}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item: Photos) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={"whitesmoke"}
          />
        }
      />

      {/* <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} /> */}
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

export default HomeScreen;
