import React from "react";
import { navData } from "../../constants/Data";
import { Box,styled,Typography } from "@mui/material";

const Component=styled(Box)(({theme})=>({
display:'flex',
margin:'55px 130px 0 130px',
justifyContent:'space-between',
overflow:'hidden',
[theme.breakpoints.down('lg')]:{
  margin:0
}
}));
const Container=styled(Box)`
padding:12px 8px;
text-align:center;
`
const Text=styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`
const Navbar = () => {
  return (
    <Component>
      {navData.map((e) => {
        return (
          <Container>
            <img src={e.url} alt="" style={{width:'65px'}}/>
            <Text style={{textAlign:'center'}}>{e.text}</Text>
          </Container>
        );
      })}
    </Component>
  );
};
export default Navbar;
