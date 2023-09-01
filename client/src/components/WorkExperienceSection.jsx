import {Stack, TextField, Typography} from "@mui/material";
import React from "react";

function WorkExperienceSection({errors, register}) {
  return (
    <Stack bgcolor="#fff" borderRadius={5} p={4} my={1} spacing={2}>
      <Typography fontSize={24}>Work Experience</Typography>
      <Typography>Do you have any relevant work experience?</Typography>
      <Typography>
        Write None if no work experience. Provide the following details if yes:
      </Typography>
      <Typography pl={4}>
        1. Job Title <br />
        2. Company Name <br />
        3. Job Duties
      </Typography>
      <Typography>
        Sample Answer: I worked as a Sales Manager at Effizient Immigration Inc
        from Jan 2022 till Feb 2023. In this role, I managed sales operations,
        reaching out to leads, lead the outreach program, ensured meeting
        monthly targets.
      </Typography>
      <TextField
        placeholder="Your Answer"
        multiline
        variant="standard"
        required
        size="small"
        error={errors.work}
        {...register("work", {
          required: "Work Experience is required",
        })}
        helperText={errors.work?.message}
      />
    </Stack>
  );
}

export default WorkExperienceSection;
