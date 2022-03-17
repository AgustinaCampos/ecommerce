import React from "react";
import Button from '@mui/material/Button';


function NavBar() {
    return(
        <header className='main-header'>
            <div className='container-logo'>
                <img
                    src="flowerIcon.png"
                    className='img-header' 
                />
            </div>
            <ul className={'navbar'}>
                <li><Button variant="text">Inicio</Button></li>
                <li><Button variant="text">Velas</Button></li>
                <li><Button variant="text">Fragancias</Button></li>
                <li><Button variant="text">Difusores</Button></li>
            </ul>
        </header>
    )
}

export default NavBar;