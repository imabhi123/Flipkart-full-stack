import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
const MainBox = styled(Box)`
  padding-left: 18rem;
  display: flex;
  height: 55px;
  align-items: center;
  margin-left: 10px;
  margin: 0 3% 0 auto;
  & > button,
  & > p {
    margin: 10px;
    align-items: center;
  }
`;
const Container = styled(Box)`
  display: flex;
`;
const LoginButton = styled(Button)`
  color: #2874f0;
  background-color: #fff;
  text-transform: none;
  width: 114px;
`;
const CustomButton = () => {
  return (
    <MainBox>
      <LoginButton variant="contained">Login</LoginButton>

      <Typography style={{ fontSize: "14px", width: "119px" }}>
        Become a Seller
      </Typography>
      <Typography style={{ fontSize: "14px", width: "60px" }}>More</Typography>
      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
    </MainBox>
  );
};

export default CustomButton;
