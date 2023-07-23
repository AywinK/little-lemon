import FooterNav from "./FooterNav";
import Contact from "./Contact";
import Socials from "./Socials";
import Logo from "../assets/icons/Logo.svg"

const Footer = () => {

    const footerStyles = {
        backgroundColor: "var(--secondary-black)",
        width: "100%",
        padding: "20px 80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "var(--secondary-white)"
    };

    const divStyles = {
        display: "flex",
        justifyContent: "center"
    }

    return (
        <footer style={footerStyles}>
            <img src={Logo} alt="Little Lemon logo" />
            <div style={divStyles}>
                <FooterNav />
                <Contact />
                <Socials />
            </div>
        </footer>
    )
}

export default Footer;