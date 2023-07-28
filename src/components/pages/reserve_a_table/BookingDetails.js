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

    const handleOccasionChange = (e) => {
        const { value } = e.target;
        setData((prevData) => ({ ...prevData, occasion: value }))
    }

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
