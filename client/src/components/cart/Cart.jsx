import { Box, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {
        <Grid>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Box>My Cart ({cartItems.length})</Box>
            {
              cartItems.map(item=><CartItem/>)
            }
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
        </Grid>
      }
    </>
  );
};

export default Cart;
