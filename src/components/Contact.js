import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';

const Contact = () => {
    const listStyle = {
        listStyle: "none",
        color: "var(--secondary-white)",
        marginTop: "5px"
    }
    return (
        <section style={{ maxWidth: "350px" }}>
            <h4 className='sectionCategories' style={{ marginBottom: "5px", }}>Contact</h4>
            <ul style={listStyle}>
                <li>
                    <PlaceIcon fontSize="medium" />
                    Little Lemon Restaurant
                    123 Main Street
                    Chicago, IL 60601
                    United States of America</li>
                <li><a style={listStyle} href="tel:13125551234">
                    <PhoneIcon fontSize="medium" />
                    +1 (312) 555-1234</a></li>
                <li><a style={listStyle} href="mailto:info@littlelemonrestaurant.com">
                    <MailIcon fontSize="medium" />
                    info@littlelemonrestaurant.com</a></li>
            </ul>
        </section>
    )
}

export default Contact;