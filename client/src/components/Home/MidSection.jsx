import React from 'react'
import { imageURL } from '../../constants/Data'
import { Grid,styled } from '@mui/material'

const Component=styled(Grid)`
margin-top:10px;
justify-content:space-between;
`
const Image=styled('img')(({theme})=>({
    marginTop:10,
    width:'100%',
    justifyContent:'space-between',
    display:'flex',
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:120
    }
}))

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <>
    <Component lg={12} sm={12} md={12} xs={12} container>
      {
        imageURL.map((image)=>{
            return (<Grid item lg={4} sm={12} md={4} xs={12}><img src={image} alt="img" style={{width:'100%'}} /></Grid>)
        })
      }
    </Component>
    <Image src={url} alt="" />
    </>
  )
}

export default MidSection
