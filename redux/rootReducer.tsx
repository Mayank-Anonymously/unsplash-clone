import { combineReducers } from "@reduxjs/toolkit";
import GetPhotos from "./slices/GetPhotos";
import SaveSeaches from "./slices/SaveSearches";
import GetSeaches from "./slices/SearchPhotos";

const rootReducer = combineReducers({
  pictures: GetPhotos,
  serach: GetSeaches,
  persistSearches: SaveSeaches,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
