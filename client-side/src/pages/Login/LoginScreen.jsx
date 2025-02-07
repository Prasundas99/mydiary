import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../../state/authAtoms";

import {
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  CssBaseline,
  Alert,
} from "@mui/material";

import Login_1 from "../../assets/Login_1.png";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serverError, setServerError] = useState("");

  const [userInfo, setUserInfo] = useAtom(userAtom);

  useEffect(() => {
    if (userInfo) navigate("/");
  }, [userInfo, navigate]);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setServerError("Please provide your credentials properly!");
      return;
    }

    try {
      const response = await fakeLoginAPI(email, password);

      if (response.success) {
        setUserInfo(response.user);
        setServerError("");
        navigate("/");
      } else {
        setServerError(response.error);
      }
    } catch (err) {
      setServerError(err);
    }
  };

  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", background: "#fff" }}
    >
      <CssBaseline />

      {/* Left Image */}
      <Grid item xs={false} sm={false} md={4}>
        <img src={Login_1} alt="Login" style={{ width: "100%" }} />
      </Grid>

      {/* Login Form */}
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        component={Paper}
        elevation={3}
        sx={{
          margin: (theme) => theme.spacing(10, 6),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
        }}
      >
        <Typography component="h1" variant="h3">
          MyDiary
        </Typography>
        <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
          Login
        </Typography>

        {serverError && (
          <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
            {serverError}
          </Alert>
        )}

        <form noValidate onSubmit={submitHandler} style={{ width: "100%", marginTop: "16px" }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, color: "#fff" }}
          >
            Login
          </Button>

          {/* Links */}
          <Grid container>
            <Grid item>
              <Typography component="h5">
                Have not registered yet? &nbsp;
                <Link to="/signup" style={{ textDecoration: "none", color: "rgb(38 98 137)" }}>
                  Register
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

// Fake API for login simulation
const fakeLoginAPI = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "test@example.com" && password === "password") {
        resolve({ success: true, user: { email, name: "John Doe" } });
      } else {
        resolve({ success: false, error: "Invalid email or password" });
      }
    }, 1000);
  });
};
