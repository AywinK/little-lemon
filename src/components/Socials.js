import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Socials = () => {
    return (
        <section>
            <h4>Social Media</h4>
            <ul>
                <li><a href="https://www.facebook.com/LittleLemonRestaurant">
                    <FacebookIcon fontSize="large" />
                </a></li>
                <li><a href="https://www.twitter.com/LittleLemonResto">
                    <TwitterIcon fontSize="large" />
                </a></li>
                <li><a href="https://www.instagram.com/littlelemonrestaurant">
                    <InstagramIcon fontSize="large" />
                </a></li>
            </ul>
        </section>
    )
};

export default Socials;