import React from "react";
import ReactDOM from "react-dom";
import Root from "./containers/Root";
import injectGlobalSytles from "./injectGlobalStyles";

const rootElement = document.getElementById("root");

ReactDOM.render(<Root />, rootElement);
injectGlobalSytles();
