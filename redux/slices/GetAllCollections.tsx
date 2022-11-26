import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
export interface Collection {
  id: string;
  title: string;
  description: null;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  curated: boolean;
  featured: boolean;
  total_photos: number;
  private: boolean;
  share_key: string;
  tags: any;
  links: any;
  user: any;
  cover_photo: any;
  preview_photos: any;
  map: any;
  results: any;
  slices: any;
}
const initialState: Collection[] = [];

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    getCollection(state, action: PayloadAction<Collection>) {
      state.push(action.payload);
    },
  },
});

export const { getCollection } = collectionSlice.actions;

export default collectionSlice.reducer;

export const GetAllCollection = (state: RootState) => state.collection;
