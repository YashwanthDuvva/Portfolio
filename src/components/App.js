import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import SkillSet from "../SkillSet";
import ProjectList from "../ProjectList";
import { Typography } from "@mui/material";
import Footer from "./Footer";
function App() {
  return (
    <>
    <Navbar />
    
    <div className="home"id="home" >
      <Home />  
    </div>
    

    <div className="skills" id="skills" >
      <div className="container my-5">
         <Typography variant='h3' gutterBottom className="heading" >My Skills</Typography>
         
        <div className="row" >
         {SkillSet.map((item, index)=>{
           return ( <div className="col-md-6" >
          <Skills key={index} title={item.title} icon={item.icon} content={item.content}/>
          </div>)
          }) }
        </div>
      </div>
    </div>

    <div className="projects" id="projects">
    <div className="container">
      <Typography variant='h3' gutterBottom className="heading">My Projects</Typography>

        <div className="row  " >
           {ProjectList.map((item, index)=>{
             return ( <div className="col-md-6" >
            <Projects key={index} title={item.title} content={item.content} link={item.link} />
            </div>)
           }) }
        </div>
      </div>
    </div>
    
    <div className="contact p-5 " id="contact">
    <Typography variant="h4" >Contact Me</Typography>
      <Contact />
    </div>
    
    <div className="footer p-5 ">
      <Footer/>
    </div>
    
    </>
  );
}

export default App;
