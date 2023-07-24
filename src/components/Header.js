import Nav from "./Nav";
import Logo from "../assets/icons/Logo.svg";

const Header = () => {

    return (
        <header className="openNav">
            <img src={Logo} style={{
                marginRight: "25px",
                overflowX: "hidden"
            }} alt="Little Lemon logo" />

            <Nav />
        </header>
    )
};

export default Header;