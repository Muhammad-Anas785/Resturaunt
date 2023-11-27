import React from "react";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from '@mui/icons-material/Email';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", padding: "20px 0px" }}
      >
        Contact us
      </Typography>
      <Grid container sx={{ my: "20px" }}>
        <Grid xs={12} md={6} padding="20px">
          <Box
            sx={{
              backgroundColor: "black",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              "& .MuiTextField-root": { mt: "10px" },
              borderRadius: "10px",
            }}
          >
            <TextField id="filled-basic" label="Name" variant="filled" />
            <TextField id="filled-basic" label="Contact No." variant="filled" />
            <TextField id="filled-basic" label="Address" variant="filled" />
            <TextField id="filled-basic" label="City" variant="filled" />

            <Button
              variant="contained"
              color="error"
              sx={{ width: "20%", mt: "10px" }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
        <Grid xs={12} md={6} padding="20px">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14474.552842670242!2d67.0583741!3d24.91031945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1700981414263!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: "0", borderRadius: "10px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
        <Grid container>
          <Typography variant="h4" sx={{ margin:"auto" ,padding:"20px 0px"}}>
            Contact Details
          </Typography>
        </Grid>

        <Grid xs={12} md={4} padding="20px" textAlign="center">
          <IconButton disableRipple>
            <ContactPhoneIcon />
            <Typography padding="0px 10px"> +92 (03172951022)</Typography>
          </IconButton>
        </Grid>

        <Grid xs={12} md={4} padding="20px" textAlign="center">
          <IconButton disableRipple>
            <EmailIcon />
            <Typography padding="0px 10px"> Ma2210688@gmail.com</Typography>
          </IconButton>
        </Grid>

        <Grid xs={12} md={4} padding="20px" textAlign="center">
          <IconButton disableRipple>
            <SupportAgentIcon />
            <Typography padding="0px 10px"> 0800-000-00</Typography>
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
