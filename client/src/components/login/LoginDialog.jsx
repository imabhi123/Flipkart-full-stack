import React, { useState } from 'react'
import { Box, Button, Dialog, TextField,Typography,styled} from '@mui/material'

const Component=styled(Box)`
height:70vh;
width:40vw;
`
const Image=styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:100%;
width:40%;
padding:45px 35px;
&>p,& h5{
  color:#FFFFFF;
  font-size:13px;
  font-weight:600;
}
`
const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
& > div,&>p, & > button{
  margin-top:20px;

}
`
const LoginButton=styled(Button)`
text-transform:none;
background:#fb641b;
color:#fff;
border-radius:2px;
height:48px;
`
const RequestOtp=styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
border-radius:2px;
height:48px;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`
const Text=styled(Typography)`
font-size:12px;
color:#878787;
`
const CreateAccount=styled(Typography)`
 font-size:14px;
 color:#2874f0;
 text-align:center;
 font-weight:600;
 cursor:pointer;
`

const LoginDialog = ({open,setOpen}) => {
  const [flag,setFlag]=useState(true);
  return (
    <div>
      <Dialog open={open} onClose={()=>setOpen(false)} PaperProps={{sx:{maxWidth:'unset'}}}>
        <Component>
          <Box style={{display:'flex',height:'100%'}}>
          <Image>
            <Typography variant='h5'>Login</Typography>
            <Typography style={{marginTop:'20px',width:'100%'}}>Get access to your orders,WishList and Recommendations</Typography>
          </Image>
          {flag?<Wrapper>
            <TextField variant='standard' label='enter Email/Phone no.'></TextField>
            <TextField variant='standard' label='Enter password'></TextField>
            <Text>By continuing this, you agree to flipkart's terms and privacy policy</Text>
            <LoginButton>Login</LoginButton>
            <Typography style={{textAlign:'center'}}>OR</Typography>
            <RequestOtp>Request Otp</RequestOtp>
            <CreateAccount onClick={()=>setFlag(false)}>New to flipkart? Create an Account</CreateAccount>
          </Wrapper>
          :
          <Wrapper>
            <TextField variant='standard' label='Enter First Name'></TextField>
            <TextField variant='standard' label='Enter Last Name'></TextField>
            <TextField variant='standard' label='Enter UserName'></TextField>
            <TextField variant='standard' label='Enter Email'></TextField>
            <TextField variant='standard' label='Enter password'></TextField>
            <TextField variant='standard' label='Enter Phone'></TextField>
            <LoginButton>Continue</LoginButton>
            <CreateAccount onClick={()=>setFlag(true)}>Account already exists? Login</CreateAccount>
          </Wrapper>}
          </Box>
        </Component>
      </Dialog>
    </div>
  )
}

export default LoginDialog
