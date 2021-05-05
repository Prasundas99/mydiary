import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import ScrollToTop from './scrolltotop';
import LoginScreen from './screen/LoginScreen';
import SigninScreen from './screen/SigninScreen';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

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
          <Navbar />
          <Switch>
            <Route exact path="/Login">
              <LoginScreen />
            </Route>
            <Route exact path="/Signin">
              <SigninScreen />
            </Route>
          </Switch>
        </ScrollToTop>
       <Footer />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;