import {Link} from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = (props) => {
/*
if (props.isLogged){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p className="navbar-brand" style={{marginLeft:10}}>NaapuriApu</p>
            <ul className="navbar-nav">
                <li className="nav-item" style={{marginLeft:10}}>
                    <Link to="/" className="nav-link">Ilmoitukset</Link>
                </li>
                <li className="nav-item" style={{marginLeft:10}}>
                    <Link to="/form" className="nav-link">Lisää ilmoitus</Link>
                </li>
                <li className="nav-item" style={{marginLeft:10}}>
                    <Link to="/" className="nav-link" onClick={props.logout}>Kirjaudu ulos</Link>
                </li>
                <li className="nav-item" style={{marginLeft:10}}>
                    <p className="nav-link" style={{color:"green"}}>Kirjautuneena käyttäjänimellä {props.user}</p>
                </li>
            </ul>
        </nav>
    )
    }   else {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <p className="navbar-brand" style={{marginleft:10}}>NaapuriApu</p>
                <ul className="navbar-nav">

                </ul>
    
            </nav>
    )
} 
*/
return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor: 'rgba(76, 75, 80, 0.1)'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">Ilmoitukset</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/form" variant>Lisää ilmoitus</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kirjaudu ulos
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;

