import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useAtom } from "jotai";
import { userAtom } from "./state/authAtoms";

import LoginScreen from "./pages/Login/LoginScreen";
import SignupScreen from "./pages/SignUp/SignUpScreen";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import Layout from "./components/Layout";

function App() {
  const [userInfo] = useAtom(userAtom); // Jotai for authentication

  // Material UI v6 Theme
  const theme = createTheme({
    typography: {
      fontFamily: '"Segoe UI", sans-serif',
    },
    palette: {
      primary: { main: "rgb(38, 98, 137)" },
      secondary: { main: "#fffafa" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent Material UI styling */}
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={!userInfo ? <LoginScreen /> : <Navigate to="/" />} />
          <Route path="/signup" element={!userInfo ? <SignupScreen /> : <Navigate to="/" />} />

          {/* Protected Routes (Require Login) */}
          {userInfo ? (
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="new" element={<NewPost />} />
            </Route>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
