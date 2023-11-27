import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import MenuData from "./Data";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box padding="10px">
        <Button
          variant="contained"
          color="error"
         
          onClick={() => navigate(-1)}
          sx={{ marginLeft: { xs: "60px", sm: "10px", md: "45px" } }}
        >
          Back To Home
        </Button>

        <Grid container spacing={2} direction="row">
          {MenuData.map((menu) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: "345px", m: "20px auto" }}>
                  <CardMedia component="img" height="140" image={menu.image} />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {menu.name}
                    </Typography>
                    <Typography variant="body2" gutterBottom>{menu.description}</Typography>
                    <Typography variant="h6">Price: {menu.price}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Menu;
