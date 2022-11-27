import React from "react";
import { StatusBar, View } from "react-native";
import { Provider } from "react-redux";
import Index from "./Index";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Index />
        <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      </View>
    </Provider>
  );
}
