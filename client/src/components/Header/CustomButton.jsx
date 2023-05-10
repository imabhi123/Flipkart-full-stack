import React, { useContext } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import { useState } from "react";
import Profile from "./Profile";
const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  alignItems: "center",
  "& > *": {
    marginRight: "40px !important",
    fontSize: "16px",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
const LoginButton = styled(Button)`
  color: #2874f0;
  background-color: #fff;
  text-transform: none;
  width: 114px;
`;
const CustomButton = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  console.log();
  return (
    <MainBox>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => setOpen(true)}>
          Login
        </LoginButton>
      )}

      <Typography style={{ fontSize: "14px", width: "119px" }}>
        Become a Seller
      </Typography>
      <Typography style={{ fontSize: "14px", width: "60px" }}>More</Typography>
      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </MainBox>
  );
};

export default CustomButton;
