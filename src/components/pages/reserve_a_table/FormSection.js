import FormSectionIndication from "./FormSectionIndication";
import BookingDetails from "./BookingDetails";
import ContactDetails from "./ContactDetails";
import { useState } from "react";

const FormSection = () => {

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
            <BookingDetails />
            <FormSectionIndication />
            <ContactDetails />
        </section>
    )
}

export default FormSection;