import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import MenuIcon from "@mui/icons-material/Menu";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ bgcolor: "Background.paper" ,p:"20px"}}>
      <IconButton edge="start" color="inherit" sx={{pl:"20px" ,justifyContent:"center"}}>
        <KebabDiningIcon fontSize="small" />
      </IconButton>
      <Typography variant=""  sx={{justifyContent:"center",pr:"20px"}} color="inherit" >
        Kebab Khan
      </Typography>

      <Tabs
        orientation="vertical"
        onChange={handleDrawer}
        indicatorColor="secondary"
        variant="scrollable"
        sx={{ textAlign: "center" }}
      >
        <Tab label="Home" component={Link} to="/" />
        <Tab label="Menu" component={Link} to="/menu" />
        <Tab label="About Us" component={Link} to="/about" />
        <Tab label="Contact Us" component={Link} to="/contact" />
      </Tabs>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ background: "black" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <KebabDiningIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            Kebab Khan
          </Typography>

          <Tabs
            textColor="white"
            indicatorColor="secondary"
            edge="start"
            value={value}
            onChange={(e, value) => setValue(value)}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Tab label="Home" component={Link} to="/" />
            <Tab label="Menu" component={Link} to="/menu" />
            <Tab label="About Us" component={Link} to="/about" />
            <Tab label="Contact Us" component={Link} to="/contact" />
          </Tabs>
          <IconButton
            color="inherit"
            edge="end"
            aria-label="open drawer"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box>
        <Drawer
          open={mobileOpen}
          onClose={handleDrawer}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
