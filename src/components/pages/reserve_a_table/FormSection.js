import FormSectionIndication from "./FormSectionIndication";
import BookingDetails from "./BookingDetails";
import ContactDetails from "./ContactDetails";
import { useState } from "react";

const FormSection = ({ availableTimes, setAvailableTimes }) => {

    const [data, setData] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: ""
    });

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
        <section
            style={{
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <FormSectionIndication />
            <BookingDetails
                data={data}
                availableTimesOptions={availableTimesOptions}
                handleSubmit={handleSubmit}
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