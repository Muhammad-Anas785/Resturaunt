import React from "react";
import {  Grid, Typography } from "@mui/material";
import dosaImage from '../Images/dosa.jpg';
import '../Styles/AboutStyles.css';

const About = () => {
  return (
    <>
     
        <Grid container sx={{padding:"40px 20px"}}>
          <Grid xs={12} md={6} sx={{textAlign:{xs:"center",sm:"left"}}} >
            <Typography variant="h4" gutterBottom>About Us</Typography>
            <Typography variant="subtitle1">
              Fruits and vegetables are “juicy foods” that consist mostly of
              water, but they also provide a variety of vitamins, minerals,
              phytonutrients, and a good amount of fiber that helps fill you up.
              Juice is another story. When whole produce is processed into juice
              most of the fiber is lost and you’re left with a less nutritious
              end product. And consider this: It takes a couple minutes to eat a
              60-calorie orange but only a couple seconds to guzzle down a
              110-calorie glass of OJ.
            </Typography>
            <Typography variant="subtitle1">
              Fruits and vegetables are “juicy foods” that consist mostly of
              water, but they also provide a variety of vitamins, minerals,
              phytonutrients, and a good amount of fiber that helps fill you up.
              Juice is another story. When whole produce is processed into juice
              most of the fiber is lost and you’re left with a less nutritious
              end product. And consider this: It takes a couple minutes to eat a
              60-calorie orange but only a couple seconds to guzzle down a
              110-calorie glass of OJ.
            </Typography>
          </Grid>

          <Grid xs={12} md={6} sx={{padding:"20px"}}>
           <img src={dosaImage} alt="no" className="aboutImage"/>
          </Grid>
        </Grid>
      
    </>
  );
};

export default About;
