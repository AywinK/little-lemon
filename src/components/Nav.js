import MenuIcon from '@mui/icons-material/Menu';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    // const stylesObj = {
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "space-around",
    //     listStyle: "none",
    // };

    // const linkStyles = {
    //     textDecoration: "none",
    //     padding: "0px 10px",
    //     color: "var(--primary-dark)"
    // };

    const openNavRef = useRef(null);
    const handleToggleNav = () => {
        openNavRef.current.classList.toggle("openNav");
    }


    const handleCLick = e => {
        handleToggleNav();
    }

    return (
        <nav>
            <ul className="sectionTitle" ref={openNavRef}>
                <li><NavLink onClick={handleCLick} to="/home">Home</NavLink></li>
                <li><a onClick={handleCLick} href="/#about">About</a></li>
                <li><a onClick={handleCLick} href="/#menu">Menu</a></li>
                <li><NavLink onClick={handleCLick} to="/reservations">Reservations</NavLink></li>
                <li><NavLink onClick={handleCLick} to="/">Order Online</NavLink></li>
                <li><NavLink onClick={handleCLick} to="/">Login</NavLink></li>
            </ul>
            <i className="hamburgerMenuBtn" onClick={handleToggleNav}><MenuIcon fontSize="large" /></i>
        </nav>
    )
}

export default Nav;