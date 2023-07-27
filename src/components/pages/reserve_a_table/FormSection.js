import FormSectionIndication from "./FormSectionIndication";
import BookingDetails from "./BookingDetails";
import ContactDetails from "./ContactDetails";
import { useState, useEffect } from "react";

const FormSection = ({ submitForm, availableTimes, setAvailableTimes, dispatch }) => {

    const [data, setData] = useState({
        date: new Date().getDate(),
        time: "",
        guests: "",
        occasion: ""
    });

    const availableTimesOptions = availableTimes.map((time) => (<option key={time}>{time}</option>));

    useEffect(() => {
        setAvailableTimes(dispatch, data.date);
    }, [data.date, dispatch, setAvailableTimes]);



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
        <section
            style={{
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px"
            }}
        >
            <FormSectionIndication />
            <BookingDetails
                data={data}
                availableTimesOptions={availableTimesOptions}
                submitForm={submitForm}
                handleDateChange={handleDateChange}
                handleTimeChange={handleTimeChange}
                handleGuestsChange={handleGuestsChange}
                handleOccasionChange={handleOccasionChange}
            />
            <FormSectionIndication />
            <ContactDetails />
        </section>
    )
}

export default FormSection;