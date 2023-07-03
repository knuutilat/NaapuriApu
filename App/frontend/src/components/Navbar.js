import {Link} from 'react-router-dom';

const Navbar = (props) => {

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
}

export default Navbar;

