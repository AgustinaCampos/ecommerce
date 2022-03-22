import React from "react";
import Button from '@mui/material/Button';
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return(
        <header className='main-header'>
           <ul className={'navbar'}>
                <li><Button variant="text">Inicio</Button></li>
                <li><Button variant="text">Velas</Button></li>
                <li><Button variant="text">Fragancias</Button></li>
                <li><Button variant="text">Difusores</Button></li>
            </ul>
            <div className='container-logo'>
                <img
                    src="flowerIcon.png"
                    className='img-header' 
                />
            </div>
            < CartWidget />
        </header>
    )
}

export default NavBar;