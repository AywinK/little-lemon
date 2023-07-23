import MenuIcon from '@mui/icons-material/Menu';
import { useRef } from 'react';

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
        e.preventDefault();
        handleToggleNav();
    }

    return (
        <nav>
            <ul className="sectionTitle" ref={openNavRef}>
                <li><a onClick={handleCLick} href="home">Home</a></li>
                <li><a onClick={handleCLick} href="about">About</a></li>
                <li><a onClick={handleCLick} href="menu">Menu</a></li>
                <li><a onClick={handleCLick} href="reservations">Reservations</a></li>
                <li><a onClick={handleCLick} href="order">Order Online</a></li>
                <li><a onClick={handleCLick} href="login">Login</a></li>
            </ul>
            <i className="hamburgerMenuBtn" onClick={handleToggleNav}><MenuIcon fontSize="large" /></i>
        </nav>
    )
}

export default Nav;