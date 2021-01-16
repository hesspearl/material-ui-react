import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline} from "@material-ui/core"
import { theme } from "./themeAndStyling";
import AppBar from "./appBar";
import TitleImage from "./titleImage"
import Grid from "./grids"

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <AppBar />
      <TitleImage/>
      <Grid/>
      
    </ThemeProvider>
  );
};

export default Index