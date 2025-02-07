import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Container } from "@mui/material";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}
