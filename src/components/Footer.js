import React from 'react'
import { Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const year=new Date().getFullYear();

function Footer() {
  return (
    <div> 
        <IconButton href='https://github.com/YashwanthDuvva' >
          <GitHubIcon/>
        </IconButton>
        <IconButton href='http://www.linkedin.com/in/yashwanth-duvva-558b45226' >
          <LinkedInIcon/>
        </IconButton>
        <IconButton href='https://www.instagram.com/yashwanth_duvva/' >
          <InstagramIcon/>
        </IconButton>
        <IconButton href='https://x.com/Duvva_Yash?t=9_zlzoQJ0foy30ZHDvjilA&s=08' >
          <XIcon/>
        </IconButton>
      <br/>
         
        <Typography variant='h6' sx={{color:"rgb(77, 77, 77)"}} >Copy rights @ {year}</Typography>
    </div>
  )
}

export default Footer;