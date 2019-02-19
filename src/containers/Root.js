import React from "react";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import store from "../store";
import StyledContainer from "../components/StyledContainer";
import { ThemeProvider } from "emotion-theming";
import theme from "../constants/theme";
import App from "../components/App";

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ThemeProvider theme={theme}>
            <StyledContainer>
              <App />
            </StyledContainer>
            <Footer />
          </ThemeProvider>
        </div>
      </Provider>
    );
  }
}

export default Root;
