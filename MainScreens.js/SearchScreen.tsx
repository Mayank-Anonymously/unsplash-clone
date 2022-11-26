import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Screen from "../components/Screen";
import TextField from "../components/TextInput";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { SearchApi } from "../api-services/SearchApi";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { useSelector } from "react-redux";
import { GetSearch, Search } from "../redux/slices/SearchPhotos";
import { persistedSearches, SaveSeaches } from "../redux/slices/SaveSearches";
const width = Dimensions.get("screen").width;

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

function SearchScreen() {
  const [state, setState] = useState("");
  const [searchedData, setSerachedData] = useState([]);
  const [selected, setSelected] = useState(1);
  const serach = useTypedSelector(GetSearch);
  const saveSearches = useTypedSelector(persistedSearches);
  const dispatch = useDispatch();
  console.log(saveSearches);
  const handleCancel = () => {
    SearchApi({ dispatch, state });
    // dispatch(SaveSeaches(state));
  };

  const Item = ({ data }: { data: Search }) => (
    <View>
      <ImageBackground
        source={{ uri: data.urls.regular }}
        style={styles.itemImagebackground}
      >
        <Text style={styles.sponsortagText}>
          {data.sponsorship === null ? "" : "Sponsored"}
        </Text>
        <Text style={styles.sponsorText}>
          {data.sponsorship === null
            ? data.user.name
            : data.sponsorship.sponsor.name}
        </Text>
      </ImageBackground>
    </View>
  );

  return (
    <Screen>
      <View style={styles.inputView}>
        <FontAwesome5 name="search" color="white" />
        <TextField
          value={state}
          onChangeText={(state) => setState(state)}
          style={styles.textInput}
          placeholder={"Serach Photos and collections"}
          placeholderTextColor={"white"}
          getter={state}
          handleCancel={handleCancel}
        />
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setSelected(0)}>
          <Text
            style={selected == 0 ? styles.selctedTab : styles.unSelectedTab}
          >
            Text1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(1)}>
          <Text
            style={selected == 1 ? styles.selctedTab : styles.unSelectedTab}
          >
            Text2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(2)}>
          <Text
            style={selected == 2 ? styles.selctedTab : styles.unSelectedTab}
          >
            Text3
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {serach.length == 0 ? (
          <Text style={{ color: "white", fontWeight: "bold" }}>{state}</Text>
        ) : (
          <FlatList
            data={serach[0].results}
            renderItem={({ item }) => <Item data={item} />}
            keyExtractor={(item: Search) => item.id}
            numColumns={2}
          />
        )}
      </View>
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
    height: 30,
    width: 30,
  },
  inputView: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    backgroundColor: "grey",
    paddingLeft: 10,
    width: width / 1.5,
    alignItems: "center",
  },
  textInput: {
    borderRadius: 5,
    color: "white",
    paddingLeft: 10,
    width: width / 1.6,
  },
  itemImagebackground: {
    flex: 1,
    flexDirection: "column-reverse",
    width: width / 2,
    height: 200,
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
  tabs: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    padding: 8,
    backgroundColor: "gray",
    marginHorizontal: 60,
    borderRadius: 10,
  },
  selctedTab: {
    backgroundColor: "#000",
    color: "white",
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  unSelectedTab: {
    color: "white",
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default SearchScreen;
/* {data.map((item) => (
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
      ))} */
