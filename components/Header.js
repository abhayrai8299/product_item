
import { createContext, useContext, useState } from "react";
import { AppBar, Toolbar, Typography,Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import { CartContext } from "../context/CartContext";

const Header = (props) => {
  const { setVisible } = useContext(CartContext);
  return (
    <AppBar position="static">
      <Grid
        justify="space-between" // Add it here :)
        container
        spacing={10}
      >
        <Grid item>
          <Typography variant="h6" component="div">
            FakeStore
          </Typography>
        </Grid>
        <Grid item>
          <button onClick={() => setVisible((state) => !state)}>
            Cart{" "}</button>
            {props.countCartItems ? (
              props.countCartItems
            ) : (
              ""
            )}{" "}
          
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
