import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import axios from "axios";

export interface Search {
  results: any;
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
  urls: {
    raw: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: object;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any;
  sponsorship: {
    sponsor: {
      id: string;
      updated_at: string;
      username: string;
      name: string;
      first_name: string;
      last_name: boolean;
      twitter_username: string;
      portfolio_url: string;
      bio: string;
      location: null;
      links: {
        self: string;
        html: string;
        photos: string;
        likes: string;
        portfolio: string;
        following: string;
        followers: string;
      };
      profile_image: {
        small: string;
        medium: string;
        large: string;
      };
      instagram_username: string;
      total_collections: number;
      total_likes: number;
      total_photos: number;
      accepted_tos: boolean;
      for_hire: boolean;
      social: {
        instagram_username: string;
        portfolio_url: string;
        twitter_username: string;
        paypal_email: null;
      };
    };
  };
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
  map: any;
  item: any;
  state: string;
}

const initialState: Search[] = [];

const Searches = createSlice({
  name: "Search",
  initialState,
  reducers: {
    GetSeaches(state, action: PayloadAction<Search>) {
      state.push(action.payload);
    },
  },
});

export const { GetSeaches } = Searches.actions;

export default Searches.reducer;

export const GetSearch = (state: RootState) => state.serach;
