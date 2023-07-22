
const Nav = ({ isFooter }) => {
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

    const footerStyles = {
        color: "var(--secondary-white)",
        textDecoration: "none",
        listStyle: "none",
        maxWidth: "400px"
    }

    console.log(isFooter)

    return (
        <nav>
            {isFooter === true ? <h4 style={{ marginBottom: "5px" }} className="sectionCategories">Navigation</h4> : null}
            <ul style={isFooter === true ? footerStyles : stylesObj} className={isFooter ? "" : "sectionTitle"}>
                <li><a style={isFooter === true ? footerStyles : linkStyles} href="home">Home</a></li>
                <li><a style={isFooter === true ? footerStyles : linkStyles} href="about">About</a></li>
                <li><a style={isFooter === true ? footerStyles : linkStyles} href="menu">Menu</a></li>
                <li><a style={isFooter === true ? footerStyles : linkStyles} href="reservations">Reservations</a></li>
                <li><a style={isFooter === true ? footerStyles : linkStyles} href="order">Order Online</a></li>
                <li><a style={isFooter === true ? footerStyles : linkStyles} href="login">Login</a></li>
            </ul>
        </nav>
    )
};

export default Nav;