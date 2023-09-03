import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, {useState} from "react";

export default function AdditionalInfoSection({errors, register, setValue}) {
  const [feesPaid, setFeesPaid] = useState("");
  const [gic, setGic] = useState("");

  const matches = useMediaQuery("(max-width: 600px)");

  const handleFeesChange = (event) => {
    setValue("isFeesPaid", event.target.value);
    setFeesPaid(event.target.value);
  };

  const handleGICChange = (event) => {
    setGic(event.target.value);
    setValue("isGic", event.target.value);
  };

  return (
    <Stack bgcolor="#fff" borderRadius={5} p={4} my={1} spacing={3}>
      <Typography fontSize={24}>Additional Information</Typography>
      <Stack width="100%" my={1.5}>
        <Typography mb={2}>
          What institute did you get admitted to in Canada?
        </Typography>
        <Stack width="60%">
          <TextField
            variant="standard"
            placeholder="Enter your Answer"
            fullWidth
            required
            size="small"
            error={errors.admitted}
            {...register("admitted", {
              required: "This field is required",
            })}
            helperText={errors.admitted?.message}
          />
        </Stack>
      </Stack>
      <Stack width="100%" my={1.5}>
        <Typography mb={2}>What is your program of study in Canada?</Typography>
        <Stack width="60%">
          <TextField
            variant="standard"
            placeholder="Enter your Answer"
            fullWidth
            required
            size="small"
            error={errors.program}
            {...register("program", {
              required: "This field is required",
            })}
            helperText={errors.program?.message}
          />
        </Stack>
      </Stack>
      <Stack width="100%" my={1.5}>
        <Typography mb={2}>Which country are you applying from?</Typography>
        <Stack width="60%">
          <TextField
            variant="standard"
            placeholder="Enter your Answer"
            fullWidth
            required
            size="small"
            error={errors.country}
            {...register("country", {
              required: "This field is required",
            })}
            helperText={errors.country?.message}
          />
        </Stack>
      </Stack>
      <Stack width="100%" my={1.5}>
        <Typography mb={2}>What are your future goals?</Typography>
        <TextField
          variant="standard"
          placeholder="Enter your Answer"
          fullWidth
          multiline
          required
          size="small"
          error={errors.goals}
          {...register("goals", {
            required: "This field is required",
          })}
          helperText={errors.goals?.message}
        />
      </Stack>
      <Stack direction="row" gap="2%" flexWrap="wrap" width="100%">
        <Stack width={matches ? "70%" : "49%"} my={1.5}>
          <Typography mb={2}>English Scores - Listening</Typography>
          <TextField
            variant="standard"
            placeholder="Enter your score"
            fullWidth
            required
            size="small"
            error={errors.listeningScore}
            type="number"
            {...register("listeningScore", {
              required: "Score is required",
            })}
            helperText={errors.listeningScore?.message}
          />
        </Stack>
        <Stack width={matches ? "70%" : "49%"} my={1.5}>
          <Typography mb={2}>English Scores - Reading</Typography>
          <TextField
            variant="standard"
            placeholder="Enter your Score"
            fullWidth
            required
            size="small"
            error={errors.readingScore}
            type="number"
            {...register("readingScore", {
              required: "Score is required",
            })}
            helperText={errors.readingScore?.message}
          />
        </Stack>
        <Stack width={matches ? "70%" : "49%"} my={1.5}>
          <Typography mb={2}>English Scores - Speaking</Typography>
          <TextField
            variant="standard"
            placeholder="Enter your Score"
            fullWidth
            required
            size="small"
            error={errors.speakingScore}
            type="number"
            {...register("speakingScore", {
              required: "Score is required",
            })}
            helperText={errors.speakingScore?.message}
          />
        </Stack>
        <Stack width={matches ? "70%" : "49%"} my={1.5}>
          <Typography mb={2}>English Scores - Writing</Typography>
          <TextField
            variant="standard"
            placeholder="Enter your Score"
            fullWidth
            required
            size="small"
            error={errors.writtingScore}
            type="number"
            {...register("writtingScore", {
              required: "Score is required",
            })}
            helperText={errors.writtingScore?.message}
          />
        </Stack>
        <Stack width={matches ? "70%" : "49%"} my={1.5}>
          <Typography mb={1}>Did you pay your first year tuition?</Typography>
          <RadioGroup
            name="controlled-radio-buttons-group"
            value={feesPaid}
            onChange={handleFeesChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          {feesPaid === "yes" ? (
            <Stack mt={2}>
              <Typography mb={2}>How much tuition fee did you pay?</Typography>
              <TextField
                variant="standard"
                placeholder="Enter your Answer"
                fullWidth
                required
                size="small"
                error={errors.feesPaid}
                type="number"
                {...register("feesPaid", {
                  required: "This field is required",
                })}
                helperText={errors.feesPaid?.message}
              />
            </Stack>
          ) : null}
          {feesPaid.length === 0 && (
            <Typography fontSize="12px" color="#D32F2F">
              This is required
            </Typography>
          )}
        </Stack>
        <Stack width={matches ? "70%" : "49%"} my={1.5}>
          <Typography mb={1}>Did you do a GIC?</Typography>
          <RadioGroup
            name="controlled-radio-buttons-group"
            value={gic}
            onChange={handleGICChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          {gic === "yes" ? (
            <Stack mt={2}>
              <Typography mb={2}>How much did you pay towards GIC?</Typography>
              <TextField
                variant="standard"
                placeholder="Enter your Answer"
                fullWidth
                required
                size="small"
                error={errors.gic}
                type="number"
                {...register("gic", {
                  required: "This field is required",
                })}
                helperText={errors.gic?.message}
              />
            </Stack>
          ) : null}
          {gic.length === 0 && (
            <Typography fontSize="12px" color="#D32F2F">
              This is required
            </Typography>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
