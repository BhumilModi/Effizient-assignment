import {Stack, Typography} from "@mui/material";
import React from "react";

function Header() {
  return (
    <Stack
      box-sizing="border-box"
      width="100%"
      height="10vh"
      bgcolor="#1D4FC2"
      position="sticky"
      top={0}
      zIndex={99}
      justifyContent="center"
    >
      <Stack px={4}>
        <Typography
          fontSize={32}
          fontWeight="bold"
          color="#fff"
          display="flex"
          flexDirection="row"
        >
          SOP{" "}
          <Typography fontSize={32} fontWeight="bold" color="#74B5FC" ml={1}>
            Generator
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Header;
