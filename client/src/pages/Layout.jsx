import {Stack} from "@mui/material";
import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <Stack
      width="100%"
      minHeight="100%"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      pb={4}
    >
      <Header />
      <Outlet />
    </Stack>
  );
}

export default Layout;
