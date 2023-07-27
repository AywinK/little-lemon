import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from "react-router-dom";
import { useRef } from 'react';

const ConfirmedBooking = () => {

    const modalRef = useRef(null);

    const fakeData = {
        date: "2/1/12",
        time: "12:00",
        guests: "2"
    }

    const handleCLick = (e) => {
        modalRef.current.classList.toggle("show");
    }

    return (

        <div
            ref={modalRef}
            className="confirmationBackdrop"
            role="dialog"
        >
            <div
                className="confirmation">
                <CloseIcon
                    onClick={handleCLick}
                    style={{
                        position: "absolute",
                        top: "15px",
                        left: "15px",
                        cursor: "pointer"
                    }}
                    fontSize="large"
                />
                <h2 className="sectionTitle">booking confirmation</h2>
                <p>We look forward to welcoming you and providing you with an exceptional dining experience. Thank you for choosing Little Lemon. We're excited to serve you!
                    <br />
                    <br />
                    Your reservation details have been emailed to you.</p>
                <br />
                <h3 className="cardTitle">Here are the details of your reservation:</h3>
                <br />
                <ul style={{ listStyle: "none", paddingLeft: "5px" }} className="leadText">
                    <li>Date: {fakeData.date}</li>
                    <li>Time: {fakeData.time}</li>
                    <li>Guests: {fakeData.guests}</li>
                </ul>
                <br />
                <NavLink to="/"><button style={{ width: "350px" }} className="cta leadText">Online Menu</button></NavLink>

            </div>
        </div>
    )
}

export default ConfirmedBooking;