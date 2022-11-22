import { combineReducers } from "@reduxjs/toolkit";
import GetPhotos from "./slices/GetPhotos";

const rootReducer = combineReducers({
  pictures: GetPhotos,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
