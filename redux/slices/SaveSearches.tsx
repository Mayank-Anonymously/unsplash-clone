import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import axios from "axios";

export interface Search {
  search: string;
}

const initialState: string[] = [];

const Searches = createSlice({
  name: "SaveSearch",
  initialState,
  reducers: {
    SaveSeaches(state, action: PayloadAction<Search>) {
      [...state, action.payload];
    },
  },
});

export const { SaveSeaches } = Searches.actions;

export default Searches.reducer;

export const persistedSearches = (state: RootState) => state.serach;
