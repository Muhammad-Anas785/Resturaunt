import { Box, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "#1A1A19", p: 3 }}>
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "40px",
              cursor: "pointer",
              mr: 2,
              transition:'1s'
            },
            "& svg:hover": {
              transform: 'translateY(-5px)',
              transition:'1s ',
              color:'goldenrod'
            },
          }}
        >
          <GitHubIcon />
          <InstagramIcon />
          <FacebookIcon />
          <YouTubeIcon />
        </Box>
        <Typography variant="h6">
          All Rights Reserved &copy; Muhammad Anas Naseer
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
