import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';

const Contact = () => {
    return (
        <section>
            <h4>Contact</h4>
            <ul>
                <li>
                    <PlaceIcon fontSize="large" />
                    Little Lemon Restaurant
                    123 Main Street
                    Chicago, IL 60601
                    United States of America</li>
                <li><a href="tel:13125551234">
                    <PhoneIcon fontSize="large" />
                    +1 (312) 555-1234</a></li>
                <li><a href="mailto:info@littlelemonrestaurant.com">
                    <MailIcon fontSize="large" />
                    info@littlelemonrestaurant.com</a></li>
            </ul>
        </section>
    )
}

export default Contact;