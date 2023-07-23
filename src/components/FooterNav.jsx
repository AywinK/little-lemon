

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
                <li><a style={footerStyles} href="home">Home</a></li>
                <li><a style={footerStyles} href="about">About</a></li>
                <li><a style={footerStyles} href="menu">Menu</a></li>
                <li><a style={footerStyles} href="reservations">Reservations</a></li>
                <li><a style={footerStyles} href="order">Order Online</a></li>
                <li><a style={footerStyles} href="login">Login</a></li>
            </ul>
        </nav>
    )
}

export default FooterNav;