import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import ScrollToTop from './scrolltotop';
import LoginScreen from "./screen/LoginScreen";

function App() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: '"Segoe UI "',
    },
    palette: {
      primary: { main: "rgb(38 98 137)" },
      secondary: { main: "#fffafa" },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <LoginScreen />
            </Route>
          </Switch>
        </ScrollToTop>
       
      </Router>
    </MuiThemeProvider>
  );
}

export default App;