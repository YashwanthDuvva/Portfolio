import React from "react";
import {IconButton, Typography, Card, CardContent } from "@mui/material";

function Skills(props){
    return(
        <Card sx={{margin:"20px", textAlign:'center'}} >
            <CardContent>
                <Typography variant="h5" >{props.title}</Typography>
                <IconButton size="large" >
                    {props.icon}
                </IconButton>
                <Typography variant="body1" >{props.content} </Typography>
            </CardContent>
        </Card>
    )
}

export default Skills; 