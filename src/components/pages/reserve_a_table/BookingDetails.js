import { useState, useEffect } from "react";

const BookingDetails = () => {

    const [data, setData] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: ""
    });

    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00,", "21:00", "22:00"]);

    const availableTimesOptions = availableTimes.map((time) => (<option key={time}>{time}</option>));

    const handleSubmit = (e) => {
        e.preventDefault();
        // setData({
        //     date: e.target["res-date"].value,
        //     time: e.target["res-time"].value,
        //     guests: e.target["guests"].value,
        //     occasion: e.target["occasion"].value
        // });
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
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "grid",
                    maxWidth: "350px",
                    gap: "20px",
                    padding: " 10px",
                    backgroundColor: "var(--primary-light)",
                    borderRadius: "16px",
                }}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" onChange={handleDateChange} value={data.date} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" onChange={handleTimeChange} value={data.time}>
                    {availableTimesOptions}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input onChange={handleGuestsChange} value={data.guests} type="number" placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={handleOccasionChange} value={data.occasion}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form >
        </div>
    )
}

export default BookingDetails;