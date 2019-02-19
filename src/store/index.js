import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise";
import api from "../middleware/api";
import logger from "redux-logger";
import rootReducer from "../reducers";

const initailState = {};
const store = createStore(
  rootReducer,
  initailState,
  compose(
    applyMiddleware(promiseMiddleware, logger, api),
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

// HMR configurations :
if (module.hot) {
  // Enable parcel hot module replacement for reducers
  module.hot.accept("../reducers", () => {
    store.replaceReducer(rootReducer);
  });
}

export default store;
