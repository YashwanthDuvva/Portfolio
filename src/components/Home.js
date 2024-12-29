import React from "react";
import { Typography } from "@mui/material";

let greet;
const curTime = new Date().getHours();
if(curTime<12)
    greet="Good Morning"
else if(curTime<18)
    greet="Good Afternoon"
else
    greet="Good Evening"

function Home(){
    return(
        <div className="home m-2">
            <Typography variant="h3" m={4} >Welcome to my Portfolio</Typography>
            <Typography variant="h6" >{greet}, I'm Yashwanth Duvva. A passionate web developer <br/> specializing in HTML, CSS, JavaScript and React. </Typography>
            
            <button type="button" className="btn btn-dark m-5 ">Get in Touch</button>
        </div>
        
    )
}

export default Home;