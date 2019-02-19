// this is the root reducers , individual reducers would be invoked fomr here

import { combineReducers } from "redux";
import movies from "./movies";
import selectedMovie from "./selectedMovie";
import userDetails from "./userDetails";

export default combineReducers({
  movies,
  selectedMovie,
  userDetails
});
