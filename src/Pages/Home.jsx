import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Banner from "../Images/banner.jpeg";
import "../Styles/HomeStyles.css";

const Home = () => {
  return (
    <>
      <Box
        className="home"
        sx={{
          backgroundImage: `url(${Banner})`,
          display: { xs: "flex" },
          justifyContent: { xs: "center", sm: "left" },
          alignItems: { xs: "center" },
          textAlign: { xs: "center", sm: "left" },
          padding: { xs: "0px 10px", sm: "0px" },
        }}
      >
        <Box
          className="headerContainer"
          sx={{
            marginLeft: { sm: "30px" },
            justifyContent: { xs: "center", sm: "left" },
            backgroundColor: { xs: "black", sm: "transparent" },
            padding: { xs: "30px", sm: "0px" },
            borderRadius: { xs: "20px" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: { xs: "35px", sm: "45px" },
            }}
          >
            Food Website
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontSize: { xs: "20px", sm: "25px" } }}
          >
            Food With Fun
          </Typography>
          <NavLink to="/menu">
            <Button
              variant="contained"
              color="error"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Order Now
            </Button>
          </NavLink>
        </Box>
      </Box>
    </>
  );
};

export default Home;
