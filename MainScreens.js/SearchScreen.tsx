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
  ScrollView,
  RefreshControl,
  Button,
  TouchableOpacity,
} from "react-native";
import Screen from "../components/Screen";
import TextField from "../components/TextInput";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { SearchApi } from "../api-services/SearchApi";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { useSelector } from "react-redux";
import { GetSeaches, GetSearch, Search } from "../redux/slices/SearchPhotos";
import { persistedSearches, SaveSeaches } from "../redux/slices/SaveSearches";
import { GetAllCollection } from "../redux/slices/GetAllCollections";
import { Photos, selectPictures } from "../redux/slices/GetPhotos";
const width = Dimensions.get("screen").width;

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

function SearchScreen() {
  const [state, setState] = useState("");
  const [searchedData, setSerachedData] = useState([]);
  const [selected, setSelected] = useState(1);
  const serach = useTypedSelector(GetSearch);
  const saveSearches = useTypedSelector(persistedSearches);
  const photos = useTypedSelector(selectPictures);
  const Collection = useTypedSelector(GetAllCollection);
  const dispatch = useDispatch();
  const ColData = Collection[0];
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout: any) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const handleSearch = () => {
    SearchApi({ dispatch, state });
  };

  const Itemm = ({ data }: { data: Search }) => (
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
      <View style={styles.inputView}>
        <FontAwesome5 name="search" color="white" />
        <TextField
          value={state}
          onChangeText={(state) => setState(state)}
          style={styles.textInput}
          placeholder={"Serach Photos and collections"}
          placeholderTextColor={"white"}
          getter={state}
          handleCancel={handleSearch}
        />
        <TouchableOpacity
          style={{ marginHorizontal: 30, padding: 10 }}
          onPress={() => handleSearch()}
        >
          <Text style={{ color: "white" }}>Serach</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {state !== "" ? (
          <>
            <View style={{ flex: 1, backgroundColor: "#000" }}>
              {serach.length == 0 ? (
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {state}
                </Text>
              ) : (
                <>
                  <FlatList
                    data={serach[0].results}
                    renderItem={({ item }) => <Itemm data={item} />}
                    keyExtractor={(item: Search) => item.id}
                    numColumns={2}
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor={"red"}
                      />
                    }
                  />
                </>
              )}
            </View>
          </>
        ) : (
          <>
            <View>
              <Text style={styles.discoverText}>Browse by Category</Text>
              <View style={{ flexDirection: "row" }}>
                {ColData.map((item: any) => {
                  return (
                    <View>
                      <ImageBackground
                        source={{ uri: item.cover_photo.urls.regular }}
                        style={styles.colData}
                      >
                        <Text style={styles.colDataText}>{item.title}</Text>
                      </ImageBackground>
                    </View>
                  );
                })}
              </View>
              <View style={{ flexDirection: "row" }}>
                {ColData.map((item: any) => {
                  return (
                    <View>
                      <ImageBackground
                        source={{ uri: item.cover_photo.urls.regular }}
                        style={styles.colData}
                      >
                        <Text style={styles.colDataText}>{item.title}</Text>
                      </ImageBackground>
                    </View>
                  );
                })}
              </View>
            </View>
            <View>
              <Text style={styles.discoverText}>Discover</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <FlatList
                data={photos}
                renderItem={({ item }) => <Item data={item} />}
                keyExtractor={(item: Photos) => item.id}
              />
              <FlatList
                data={photos}
                renderItem={({ item }) => <Item data={item} />}
                keyExtractor={(item: Photos) => item.id}
              />
            </View>
          </>
        )}
      </ScrollView>
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
    width: width / 1.7,
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
  colData: {
    width: 100,
    height: 100,
    marginHorizontal: 15,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  colDataText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  discoverText: {
    fontSize: 30,
    color: "white",
    marginHorizontal: 20,
    marginVertical: 20,
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
