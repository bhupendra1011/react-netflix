import { FETCH_USER_DETAILS } from "../actions/type";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_DETAILS:
      return {
        isLoading: false,
        ...action.payload.data
      };
    default:
      return state;
  }
};

export default reducer;
