import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../state/authAtoms";


export default function Navbar() {
  const navigate = useNavigate();
  const [setUserInfo] = useAtom(userAtom);

  const handleLogout = () => {
    setUserInfo(null); 
    navigate("/login"); 
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "rgb(38 98 137)", padding: 1, width: "100%" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Side - Logo */}
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          MyDiary
        </Typography>

        {/* Right Side - Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" color="secondary" onClick={() => navigate("/new")}>
            Create Post
          </Button>
          <Button variant="contained" color="error" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
