import {Stack, Typography} from "@mui/material";
import axios from "axios";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import AdditionalInfoSection from "../components/AdditionalInfoSection";
import Loader from "../components/Loader";
import PersonalInfoSection from "../components/PersonalInfoSection";
import WorkExperienceSection from "../components/WorkExperienceSection";

function InformationForm() {
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: {errors},
    setValue,
  } = useForm();

  const sendForm = async (data) => {
    setIsLoading(true);
    try {
      await axios
        .post(process.env.REACT_APP_BASE_URL + "/submit", data)
        .then(() => nav("/thank-you"));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Stack width="60%">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Stack
            bgcolor="#fff"
            borderRadius={5}
            p={4}
            spacing={1}
            border="3px solid #74B5FC"
          >
            <Typography>
              Fill this questionnaire for the student. After submitting, you
              will receive an email at the email address that you have provided
              with a Statement of Purpose customized for you. You can use and
              modify that as per your needs.
            </Typography>
            <Typography>
              If you would like to get it edited, reviewed, or drafted by our
              experts, you can get in touch with us:
              <Link
                to="https://effizient-immigration-inc.square.site/s/shop"
                style={{
                  marginLeft: "4px",
                }}
              >
                https://effizient-immigration-inc.square.site/s/shop
              </Link>
            </Typography>
          </Stack>
          <form style={{width: "100%"}}>
            <PersonalInfoSection errors={errors} register={register} />
            <WorkExperienceSection errors={errors} register={register} />
            <AdditionalInfoSection
              errors={errors}
              register={register}
              setValue={setValue}
            />
            <Stack
              height="7vh"
              alignItems="center"
              justifyContent="center"
              bgcolor="#1D4FC2"
              my={2}
              color="#fff"
              borderRadius={4}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "#74B5FC",
                },
              }}
              onClick={handleSubmit(sendForm)}
            >
              <Typography fontSize="20px">Submit Questionnaire</Typography>
            </Stack>
          </form>
        </>
      )}
    </Stack>
  );
}

export default InformationForm;
