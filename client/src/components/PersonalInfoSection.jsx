import {
  Autocomplete,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

function PersonalInfoSection({errors, register}) {
  const matches = useMediaQuery("(max-width:600px)");

  const options = [
    "Grade 12",
    "Diploma",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
  ];
  return (
    <Stack bgcolor="#fff" borderRadius={5} p={4} my={1} spacing={2}>
      <Typography fontSize={24}>Personal Information</Typography>
      <Stack direction="row" gap="2%" flexWrap="wrap" width="100%">
        <Stack width="100%" my={1.5}>
          <Typography mb={2}>Email</Typography>
          <TextField
            variant="standard"
            placeholder="Email"
            fullWidth
            required
            size="small"
            error={errors.email}
            {...register("email", {
              required: "Email is required",
            })}
            helperText={errors.email?.message}
          />
        </Stack>
        <Stack width={matches ? "100%" : "49%"} my={1.5}>
          <Typography mb={2}>First Name</Typography>
          <TextField
            variant="standard"
            placeholder="Enter First Name"
            fullWidth
            required
            size="small"
            error={errors.firstName}
            {...register("firstName", {
              required: "First Name is required",
            })}
            helperText={errors.firstName?.message}
          />
        </Stack>
        <Stack width={matches ? "100%" : "49%"} my={1.5}>
          <Typography mb={2}>Last Name</Typography>
          <TextField
            variant="standard"
            placeholder="Enter Last Name"
            fullWidth
            required
            size="small"
            error={errors.lastName}
            {...register("lastName", {
              required: "Last Name is required",
            })}
            helperText={errors.lastName?.message}
          />
        </Stack>
        <Stack width={matches ? "100%" : "49%"} my={1.5}>
          <Typography mb={2}>Age</Typography>
          <TextField
            variant="standard"
            placeholder="Enter your age"
            fullWidth
            required
            size="small"
            error={errors.age}
            type="number"
            {...register("age", {
              required: "Age is required",
            })}
            helperText={errors.age?.message}
          />
        </Stack>
        <Stack width={matches ? "100%" : "49%"} my={1.5}>
          <Typography mb={1}>Highest Level of Education</Typography>
          <Autocomplete
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Choose"
                error={errors.education}
                size="small"
                {...register("education", {
                  required: "Adding Education is required",
                })}
                helperText={errors.education?.message}
              />
            )}
          />
        </Stack>

        <Stack width="100%" my={1.5}>
          <Typography mb={2}>
            Institute where you completed your highest level of education
          </Typography>
          <Stack width="60%">
            <TextField
              variant="standard"
              placeholder="Enter your Institute"
              fullWidth
              required
              size="small"
              error={errors.institute}
              {...register("institute", {
                required: "Institute is required",
              })}
              helperText={errors.institute?.message}
            />
          </Stack>
        </Stack>
        <Stack width="60%" my={1.5}>
          <Typography mb={2}>What did you study</Typography>
          <TextField
            variant="standard"
            placeholder="Enter your Answer"
            fullWidth
            required
            size="small"
            error={errors.course}
            {...register("course", {
              required: "This field is required",
            })}
            helperText={errors.course?.message}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default PersonalInfoSection;
