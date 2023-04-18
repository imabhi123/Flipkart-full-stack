import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import { DataContext } from "../../context/DataProvider";

import { authenticateSignup,authenticateLogin } from "../../service/api";

const Component = styled(Box)`
  height: 70vh;
  width: 40vw;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 82%;
  width: 28%;
  padding: 45px 35px;
  & > p,
  & h5 {
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
  }
`;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > p,
  & > button {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  height: 48px;
`;
const RequestOtp = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  border-radius: 2px;
  height: 48px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  color: #2874f0;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
`;

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues={
  username:'',
  password:'',
}

const accountInitialValues={
  login:{
    view:'login',
    heading:'Login',
    subHeading:'Get access to your Orders,WishList and recommendations'
  },
  signup:{
    view:'signup',
    heading:'looks like you are new here',
    subHeading:'signup with your mobile no to get started'
  }
}

const LoginDialog = ({ open, setOpen }) => {
  const [account,toggleAccount]=useState(accountInitialValues.login)
  const [signup,setSignup]=useState(signupInitialValues);

  const [login,setLogin]=useState(loginInitialValues)

  const {setAccount}=useContext(DataContext)

  const handleClose=()=>{
    setOpen(false)
    toggleAccount(accountInitialValues.login)
  }

const handleChange=(e)=>{
setSignup({...signup,[e.target.name]:e.target.value})
console.log(signup)
}

const signupUser=async()=>{
  const response=await authenticateSignup(signup)
  if(!response)return;
  handleClose();
  setAccount(signup.firstname);
}

const onValueChange=(e)=>{
  setLogin({...login,[e.target.name]:e.target.value})
}

const loginUser=async()=>{
  let response=await authenticateLogin(login);
}

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        <Component>
          <Box style={{ display: "flex", height: "100%" }}>
            <Image>
              <Typography variant="h5" style={{ fontSize: "22px" }}>
                {account.heading}
              </Typography>
              <Typography style={{ marginTop: "20px", width: "100%" }}>
                {account.subHeading}
              </Typography>
            </Image>
            {account.view==='login'? (
              <Wrapper>
                <TextField
                  variant="standard"
                  label="enter Email/Phone no."
                  onChange={(e)=>onValueChange(e)}
                  name='username'
                ></TextField>
                <TextField
                  variant="standard"
                  label="Enter password"
                  onChange={(e)=>onValueChange(e)}
                  name="password"
                ></TextField>
                <Text>
                  By continuing this, you agree to flipkart's terms and privacy
                  policy
                </Text>
                <LoginButton onClick={loginUser}>Login</LoginButton>
                <Typography style={{ textAlign: "center" }}>OR</Typography>
                <RequestOtp>Request Otp</RequestOtp>
                <CreateAccount onClick={() => toggleAccount(accountInitialValues.signup)}>
                  New to flipkart? Create an Account
                </CreateAccount>
              </Wrapper>
            ) : (
              <Wrapper>
                <TextField
                  variant="standard"
                  name="firstname"
                  onChange={handleChange}
                  label="Enter First Name"
                ></TextField>
                <TextField
                  variant="standard"
                  name="lastname"
                  onChange={handleChange}
                  label="Enter Last Name"
                ></TextField>
                <TextField
                  variant="standard"
                  name="username"
                  onChange={handleChange}
                  label="Enter UserName"
                ></TextField>
                <TextField
                  variant="standard"
                  name="email"
                  onChange={handleChange}
                  label="Enter Email"
                ></TextField>
                <TextField
                  variant="standard"
                  name="password"
                  onChange={handleChange}
                  label="Enter password"
                ></TextField>
                <TextField
                  variant="standard"
                  name="phone"
                  onChange={handleChange}
                  label="Enter Phone"
                ></TextField>
                <LoginButton onClick={signupUser}>Continue</LoginButton>
              </Wrapper>
            )}
          </Box>
        </Component>
      </Dialog>
    </div>
  );
};

export default LoginDialog;
