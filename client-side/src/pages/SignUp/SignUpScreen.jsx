import  { useState, useEffect } from "react";
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

import Signup_1 from "../../assets/Signup_1.png";


export default function SignupScreen() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serverError, setServerError] = useState("");

  const [userInfo, setUserInfo] = useAtom(userAtom);

  useEffect(() => {
    if (userInfo) navigate("/");
  }, [userInfo, navigate]);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      setServerError("All fields are required!");
      return;
    }

    try {
      const response = await fakeSignupAPI(name, email, password);

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
        <img src={Signup_1} alt="Signup" style={{ width: "100%" }} />
      </Grid>

      {/* Signup Form */}
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
          Sign Up
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
            label="Full Name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
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
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="I agree to the terms & conditions"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, color: "#fff" }}
          >
            Sign Up
          </Button>

          {/* Links */}
          <Grid container>
            <Grid item>
              <Typography component="h5">
                Already have an account? &nbsp;
                <Link to="/login" style={{ textDecoration: "none", color: "rgb(38 98 137)" }}>
                  Login
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

// Fake API for signup simulation
const fakeSignupAPI = async (name, email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "test@example.com") {
        resolve({ success: false, error: "Email is already in use." });
      } else {
        resolve({ success: true, user: { name, email } });
      }
    }, 1000);
  });
};
