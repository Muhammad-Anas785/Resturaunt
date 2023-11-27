import { Drawer, IconButton, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Tabs
          orientation="vertical"
          textColor="white"
          indicatorColor="secondary"
          variant="scrollable"
          value={value}
          onChange={(e, value) => setValue(value)}
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Home" component={Link} to="/" />
          <Tab label="Menu" component={Link} to="/menu" />
          <Tab label="About Us" component={Link} to="/about" />
          <Tab label="Contact Us" component={Link} to="/contact" />
        </Tabs>
      </Drawer>

    </>
  );
};

export default DrawerComp;
