import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
      <Typography fontSize="24px">
        Please wait we are preparing a customized SOP for you.
      </Typography>
    </Box>
  );
}

export default Loader;
