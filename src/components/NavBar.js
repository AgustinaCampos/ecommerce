import React, {useState} from "react";
import {
    Button, Drawer, Box, ListItem, List, ListItemText, ListItemIcon
} from '@mui/material';
import CartWidget from "./CartWidget"; 


const NavBar = () => {
    const [open, setOpen] = useState(false);

    const openDrawer = () => {
        setOpen(!open)
    }

    return(
        <header className='main-header'>
            <Button onClick={openDrawer}>Menu</Button>
            <SideBar open={open} setOpen={setOpen} />
            <div className='container-logo'>
                <img
                    src="flowerIcon.png"
                    className='img-header' 
                />
            </div>
            <CartWidget />
        </header>
    )
}

const SideBar = ({ open, setOpen }) => {

    return(
        <Drawer
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
            >
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <i class="bi bi-house"></i>
                        </ListItemIcon>
                        <ListItemText primary={"Inicio"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <i class="bi bi-rainbow"></i>
                        </ListItemIcon>
                        <ListItemText primary={"Velas"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <i class="bi bi-brightness-high"></i>
                        </ListItemIcon>
                        <ListItemText primary={"Fragancias"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <i class="bi bi-emoji-wink"></i>
                        </ListItemIcon>
                        <ListItemText primary={"Difusores"} />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}

export default NavBar;