import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
    const stylesObj = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        listStyle: "none",
    };

    const linkStyles = {
        textDecoration: "none",
        padding: "0px 10px",
        color: "var(--primary-dark)"
    };


    return (
        <nav>
            <ul className="sectionTitle">
                <li><a href="home">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="menu">Menu</a></li>
                <li><a href="reservations">Reservations</a></li>
                <li><a href="order">Order Online</a></li>
                <li><a href="login">Login</a></li>
            </ul>
            <i className="hamburgerMenuBtn" ><MenuIcon fontSize="large" /></i>
        </nav>
    )
}

export default Nav;