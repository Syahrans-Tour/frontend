import "./App.css";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import ErrorBoundary from "./components/ErrorBoundaries/ErrorBoundaries";
import { history } from "./helpers/common";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home/Home";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <HistoryRouter history={history}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <ErrorBoundary>
          <GlobalStyle />
          <Home themeToggler={themeToggler} />
        </ErrorBoundary>
      </ThemeProvider>
    </HistoryRouter>
  );
}

export default App;
