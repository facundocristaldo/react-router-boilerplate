import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const active = {
    backgroundColor: "lightblue",
    color: "white",
  };
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4">Burger App</Typography>
        <NavLink activeStyle={active} to="/" exact>
          <Button variant="outlined">Home</Button>
        </NavLink>
        <NavLink activeStyle={active} to="/burger" exact>
          <Button variant="outlined">Burger</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
