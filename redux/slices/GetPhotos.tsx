import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
export interface Photos {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: any;
  width: number;
  height: number;
  color: string;
  blur_hash: any;
  description: any;
  alt_description: any;
  urls: object;
  links: object;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any;
  sponsorship: object;
  topic_submissions: object;
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: any;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: any;
    links: object;
    profile_image: object;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: object;
  };
}

const initialState: Photos[] = [];

const pictureSlice = createSlice({
  name: "piture",
  initialState,
  reducers: {
    getPhotos(state, action: PayloadAction<Photos>) {
      state.push(action.payload);
    },
  },
});

export const { getPhotos } = pictureSlice.actions;

export default pictureSlice.reducer;

export const selectTodos = (state: RootState) => state.pictures;
