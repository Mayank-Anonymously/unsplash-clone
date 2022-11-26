import { combineReducers } from "@reduxjs/toolkit";
import GetAllCollections from "./slices/GetAllCollections";
import GetPhotos from "./slices/GetPhotos";
import SaveSeaches from "./slices/SaveSearches";
import GetSeaches from "./slices/SearchPhotos";

const rootReducer = combineReducers({
  pictures: GetPhotos,
  serach: GetSeaches,
  persistSearches: SaveSeaches,
  collection: GetAllCollections,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
