import Nav from "./Nav";
import Logo from "../assets/icons/Logo.svg";

const Header = () => {

    const stylesObj = {
        display: "flex",
        margin: "20px",
        alignItems: "center"
    }
    return (
        <header style={stylesObj}>
            <img src={Logo} style={{ marginRight: "25px" }} alt="Little Lemon logo" />

            <Nav />
        </header>
    )
};

export default Header;