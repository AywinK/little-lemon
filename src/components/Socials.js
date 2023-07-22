import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Socials = () => {
    const listStyle = {
        listStyle: "none",
        color: "var(--secondary-white)",
    }
    return (
        <section>
            <h4 style={{ marginBottom: "5px", whiteSpace: "nowrap" }}>Social Media</h4>
            <ul style={listStyle}>
                <li><a style={listStyle} href="https://www.facebook.com/LittleLemonRestaurant">
                    <FacebookIcon fontSize="large" />
                </a></li>
                <li><a style={listStyle} href="https://www.twitter.com/LittleLemonResto">
                    <TwitterIcon fontSize="large" />
                </a></li>
                <li><a style={listStyle} href="https://www.instagram.com/littlelemonrestaurant">
                    <InstagramIcon fontSize="large" />
                </a></li>
            </ul>
        </section>
    )
};

export default Socials;