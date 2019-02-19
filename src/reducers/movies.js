import { GET_MOVIES } from "../actions/type";

const reducer = (state = null, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return state;
    default:
      return state;
  }
};

export default reducer;
