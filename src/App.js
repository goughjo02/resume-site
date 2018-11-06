import React, { Component, Fragment } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";

import Header from "./components/header";
import School from "./components/school";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: theme
    };
  }
  render() {
    const { theme } = this.state;
    return (
      <Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Header />
          <School />
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default App;
