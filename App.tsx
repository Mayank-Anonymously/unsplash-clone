import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import Index from "./Index";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={"white"} />
      <Index />
    </Provider>
  );
}
