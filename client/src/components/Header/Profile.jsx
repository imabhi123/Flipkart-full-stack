import React from 'react'
import { Box,Typography } from '@mui/material'
const Profile = ({account}) => {
  return (
    <>
    <Box><Typography style={{marginTop:2}}>{account}</Typography></Box>
    </>
  )
}

export default Profile
