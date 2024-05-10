import * as React from 'react';
import './navbar.css';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import QuizIcon from '@mui/icons-material/Quiz';


const Navbar = () => {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem className='sidebar'>
                    <ListItemButton className='sidebarButton'>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItemButton>
                    <ListItemButton className='sidebarButton'>
                        <ListItemIcon>
                            <FlashOnIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Flashcard"} />
                    </ListItemButton>
                    <ListItemButton className='sidebarButton'>
                        <ListItemIcon>
                            <ContactPageIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Contact"} />
                    </ListItemButton>
                    <ListItemButton className='sidebarButton'>
                        <ListItemIcon>
                            <QuizIcon />
                        </ListItemIcon>
                        <ListItemText primary={"FAQ"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem className='sidebar'>
                    <ListItemButton className='sidebarButton'>
                        <ListItemIcon>
                                    <LoginIcon />                            
                        </ListItemIcon>
                                <button className='btn'>Login</button>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );




    return (
        <div className="nav">
            <Box sx={{ flexGrow: 1 }} className='box'>
                <ListItem className='listOne'>
                    <div className="image">
                        <img src="/images/logoHyggex.png" alt="" srcset="" />
                    </div>

                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        className='typo'
                    >
                        <span>Hygge</span><span>X</span>
                    </Typography>
                </ListItem>

                <ListItem className='listTwo'>
                    <MenuItem className='menu'>
                        <Typography textAlign="center" className='menuTypo'>Home</Typography>
                    </MenuItem>
                    <MenuItem className='menu'>
                        <Typography textAlign="center" className='menuTypo'>Flashcard</Typography>
                    </MenuItem>
                    <MenuItem className='menu'>
                        <Typography textAlign="center" className='menuTypo'>Contact</Typography>
                    </MenuItem>
                    <MenuItem className='menu'>
                        <Typography textAlign="center" className='menuTypo'>FAQ</Typography>
                    </MenuItem>
                    <MenuItem className='menuBtn'>
                        <Button variant="contained" className='btn'>Login</Button>
                    </MenuItem>
                </ListItem>
                <ListItem className='listThree'>
                    <React.Fragment>
                        <MenuIcon onClick={toggleDrawer("right", true)} className='menuIcon' />

                        <Drawer
                            anchor='right'
                            open={state["right"]}
                            onClose={toggleDrawer("right", false)}
                        >
                            {list("right")}
                        </Drawer>
                    </React.Fragment>
                </ListItem>

            </Box>
        </div>
    )
}

export default Navbar;