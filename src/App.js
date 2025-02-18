import React, { Component } from "react";

import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppColors from "./view/_constants/AppColors";
import HomePage from "./view/pages/HomePage.js";

const THEME = createTheme({
  palette: {
    primary: {
      main: AppColors.Primary,
    },
    secondary: {
      main: AppColors.Secondary,
    },
    success: {
      main: AppColors.Success,
    },
    neutral: {
      main: AppColors.Light,
    },
  },
  typography: {
    fontFamily: ["Duru Sans", "Dosis", "Darker Grotesque", "sans-serif"].join(
      ","
    ),
    fontSize: 12,
  },
});

const STYLE = {
  width: 400,
  maxWidth: "90%",
  margin: "auto",
  marginTop: 3,
  marginBottom: 10,
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={THEME}>
        <Box sx={STYLE}>
          <HomePage />
        </Box>
      </ThemeProvider>
    );
  }
}
