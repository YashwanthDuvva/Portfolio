import React from "react";
import {IconButton,Typography, Card, CardContent, CardActions, Paper } from "@mui/material";

function Projects(props){
    return(
        <Card sx={{margin:"20px", textAlign:'center'}}>
             <CardContent>
                 <Typography variant="h5" >{props.title}</Typography>
                 <IconButton size="large" >
                     {props.icon}
                 </IconButton>
                 <Typography variant="body1" >{props.content} </Typography>
             </CardContent>
             <CardActions>
                <a href={props.link} > <button type="button" className="btn btn-dark" style={{marginLeft:"40%"}} >   View Project  </button></a>
             </CardActions>
        </Card>
    )
}

export default Projects;