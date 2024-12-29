import React from "react";
import {IconButton,Typography, Card, CardContent, CardActions, TextField } from "@mui/material";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Contact(){
    return(
         <Card sx={{ margin:"20px", marginLeft:'35%', padding:"20px", textAlign:'center', width:'400px'  }}  >
             <CardContent>
                 
                 <Typography variant="body1" gutterBottom>Fill out the form below to send me a message </Typography>

                 <TextField label="Your Name" sx={{margin:'10px',width:'100%'}} /> <br/>
                 <TextField label="Your Email" sx={{margin:'10px',width:'100%'}} /> <br/>
                 <TextField label="Message" rows={3} sx={{margin:'10px', width:'100%'}} /> <br/>
             </CardContent>
             <CardActions>
                <button type="button" className="btn btn-dark" style={{marginLeft:"33%", textAlign:"center"}} > <IconButton> <SendOutlinedIcon /> </IconButton> Send </button>
             </CardActions>
         </Card>
    )
}

export default Contact;