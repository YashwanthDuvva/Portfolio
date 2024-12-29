import React from "react";
import { AppBar, Toolbar, Button, Stack, Avatar, Typography } from "@mui/material";
import Yash from './avatar.jpg'

function Navbar(){
    return(
        <AppBar position="relative" style={{ backgroundColor: ' rgb(44,44,44)' }}  >
            <Toolbar>
                <Avatar src={Yash}  alt="Yashwanth Image" sx={{backgroundColor:"black"}} />
                <Typography variant="h5" m={2} component='div' style={{flexGrow:1}} > Yashwanth</Typography>

                <Stack direction='row' spacing={2}>
                    <Button variant="contained" color="dark" size="medium" href="#home" disableElevation >Home</Button>
                    <Button variant="contained" color="light" size="medium" href="#skills" disableElevation >Skills</Button>
                    <Button variant="contained" color="dark" size="medium" href="#projects" disableElevation >Projects</Button>
                    <Button variant="contained" color="dark" size="medium" href="#contact" disableElevation >Contact</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;