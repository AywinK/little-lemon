import { NavLink } from "react-router-dom";

const FooterNav = () => {

    const footerStyles = {
        color: "var(--secondary-white)",
        textDecoration: "none",
        listStyle: "none",
        maxWidth: "400px"
    }

    return (
        <nav>
            <h4 style={{ marginBottom: "5px" }} className="sectionCategories">Navigation</h4>
            <ul style={footerStyles}>
                <li><NavLink style={footerStyles} to="/home">Home</NavLink></li>
                <li><a style={footerStyles} href="/#about">About</a></li>
                <li><a style={footerStyles} href="/#menu">Menu</a></li>
                <li><NavLink style={footerStyles} to="/reservations">Reservations</NavLink></li>
                <li><NavLink style={footerStyles} to="/">Order Online</NavLink></li>
                <li><NavLink style={footerStyles} to="/">Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default FooterNav;