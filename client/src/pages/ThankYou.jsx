import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {Stack, Typography} from "@mui/material";
import React from "react";

function ThankYou() {
  return (
    <Stack width="60%">
      <Stack
        bgcolor="#fff"
        borderRadius={5}
        p={4}
        spacing={2}
        color="#4BB543"
        border="3px solid #4BB543"
        alignItems="center"
        my={2}
      >
        <CheckCircleOutlineIcon sx={{fontSize: "4rem"}} />
        <Typography fontSize="30px" fontWeight="600">
          Thank You
        </Typography>
        <Typography color="#000" textAlign="center">
          We appreciate your interest and the information you provided. <br />
          An email has been sent to the address you provided. Please check your
          inbox, including the spam folder, if you do not see it in your main
          inbox.
        </Typography>
        <Typography color="#000" textAlign="center">
          If you have any further questions or need assistance, please feel free
          to contact our support team at info@effizient.ca .
        </Typography>
      </Stack>
    </Stack>
  );
}

export default ThankYou;
