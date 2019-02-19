import { SELECT_MOVIE } from "../actions/type";

const reducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_MOVIE:
      return state;
    default:
      return state;
  }
};

export default reducer;
