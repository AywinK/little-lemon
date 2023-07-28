import ConfirmedBooking from "./ConfirmedBooking";
import { useState } from "react";

const BookingDetails = ({
    data,
    setData,
    availableTimesOptions,
    submitForm,
}) => {

    const [submissionStatus, setSubmissionStatus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmissionStatus(submitForm(data));
    }

    const handleDateChange = (e) => {
        const { value } = e.target;
        setData((prevData) => ({ ...prevData, date: value }));
    };

    const handleTimeChange = (e) => {
        const { value } = e.target;
        setData((prevData) => ({ ...prevData, time: value }))
    };

    const handleGuestsChange = (e) => {
        const { value } = e.target;
        setData((prevData) => ({ ...prevData, guests: value }))
    };

    const handleLocationChange = (e) => {
        const { value } = e.target;
        setData((prevData) => ({ ...prevData, location: value }))
    };

    const handleOccasionChange = (e) => {
        const { value } = e.target;
        setData((prevData) => ({ ...prevData, occasion: value }))
    };

    const handleCommentsChange = (e) => {
        const { value } = e.target;
        setData((prevData) => ({ ...prevData, comments: value }))
    };

    const handleFNameChange = (e) => {
        const { value } = e.target;
        setData((prevData) => ({ ...prevData, fName: value }))
    };

    const handleLNameChange = (e) => {
        const { value } = e.target;
        setData((prevData) => ({ ...prevData, lName: value }))
    };

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setData((prevData) => ({ ...prevData, email: value }))
    };

    const handlePhoneChange = (e) => {
        const { value } = e.target;
        setData((prevData) => ({ ...prevData, phone: value }))
    };


    return (
        <div
            style={{
                backgroundColor: "var(--primary-light)",
                maxWidth: "360px",
                borderRadius: "16px",
            }}
        >
            <ConfirmedBooking
                data={data}
                setSubmissionStatus={setSubmissionStatus}
                submissionStatus={submissionStatus}
            />
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "grid",
                    maxWidth: "350px",
                    gap: "20px",
                    padding: " 10px",
                    backgroundColor: "var(--primary-light)",
                    borderRadius: "16px",
                }}
                // Adding ARIA roles and attributes
                aria-label="Booking details form"
            >
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    onChange={handleDateChange}
                    value={data.date}
                    aria-labelledby="res-date-label"
                    data-testid="res-date"
                    style={{
                        padding: "8px",
                        borderRadius: "16px",
                        border: "1px solid var(--primary-dark)",
                        width: "100%",
                    }}
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    onChange={handleTimeChange}
                    value={data.time}
                    aria-labelledby="res-time-label"
                    data-testid="res-time"
                    style={{
                        padding: "8px",
                        borderRadius: "16px",
                        border: "1px solid var(--primary-dark)",
                        width: "100%",
                    }}
                >
                    {availableTimesOptions}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    onChange={handleGuestsChange}
                    value={data.guests}
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    aria-labelledby="guests-label"
                    aria-describedby="guests-description"
                    data-testid="guests"
                    style={{
                        padding: "8px",
                        borderRadius: "16px",
                        border: "1px solid var(--primary-dark)",
                        width: "100%",
                    }}
                />

                <label htmlFor="location">Location</label>
                <select
                    id="location"
                    onChange={handleLocationChange}
                    value={data.location}
                    aria-labelledby="location-label"
                    data-testid="location"
                    style={{
                        padding: "8px",
                        borderRadius: "16px",
                        border: "1px solid var(--primary-dark)",
                        width: "100%",
                    }}
                >
                    <option>Indoors</option>
                    <option>Outdoors</option>
                </select>

                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    onChange={handleOccasionChange}
                    value={data.occasion}
                    aria-labelledby="occasion-label"
                    data-testid="occasion"
                    style={{
                        padding: "8px",
                        borderRadius: "16px",
                        border: "1px solid var(--primary-dark)",
                        width: "100%",
                    }}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <label htmlFor="comments">Additional Comments</label>
                <textarea
                    id="comments"
                    onChange={handleCommentsChange}
                    value={data.comments}
                    aria-labelledby="comments-label"
                    data-testid="comments"
                    style={{
                        padding: "8px",
                        borderRadius: "16px",
                        border: "1px solid var(--primary-dark)",
                        width: "100%",
                        minHeight: "200px", // Set an appropriate height for the textarea
                    }}
                />



                <label htmlFor="fName">First Name</label>
                <input
                    type="text"
                    id="fname"
                    onChange={handleFNameChange}
                    value={data.fName}
                    aria-labelledby="fName-label"
                    data-testid="fName"
                    style={{
                        padding: "8px",
                        borderRadius: "16px",
                        border: "1px solid var(--primary-dark)",
                        width: "100%",
                    }}
                />
                <label htmlFor="lName">Last Name</label>
                <input
                    type="text"
                    id="lName"
                    onChange={handleLNameChange}
                    value={data.lName}
                    aria-labelledby="lName-label"
                    data-testid="lName"
                    style={{
                        padding: "8px",
                        borderRadius: "16px",
                        border: "1px solid var(--primary-dark)",
                        width: "100%",
                    }}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    onChange={handleEmailChange}
                    value={data.email}
                    aria-labelledby="email-label"
                    data-testid="email"
                    style={{
                        padding: "8px",
                        borderRadius: "16px",
                        border: "1px solid var(--primary-dark)",
                        width: "100%",
                    }}
                />

                <label htmlFor="phone">Phone Number (Optional)</label>
                <input
                    type="tel"
                    id="phone"
                    onChange={handlePhoneChange}
                    value={data.phone}
                    aria-labelledby="phone-label"
                    data-testid="phone"
                    style={{
                        padding: "8px",
                        borderRadius: "16px",
                        border: "1px solid var(--primary-dark)",
                        width: "100%",
                    }}
                />




                <input
                    type="submit"
                    value="Make Your Reservation"
                    aria-label="Make Your reservation"
                    className="submit leadText"
                />
            </form>
        </div>
    )
}

export default BookingDetails;
