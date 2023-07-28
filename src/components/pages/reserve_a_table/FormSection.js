import FormSectionIndication from "./FormSectionIndication";
import BookingDetails from "./BookingDetails";
import ContactDetails from "./ContactDetails";
import { useState, useEffect } from "react";

const FormSection = ({ submitForm, availableTimes, setAvailableTimes, dispatch }) => {

    const [data, setData] = useState({
        date: `${(new Date()).getFullYear()}-0${(new Date()).getMonth() + 1}-${(new Date()).getDate()}`,
        time: availableTimes[0],
        guests: "1",
        occasion: "Birthday",
        location: "Indoors",
        comments: "",
        fName: "",
        lName: "",
        email: "",
        phone: "",
    });

    const availableTimesOptions = availableTimes.map((time) => (<option key={time}>{time}</option>));

    useEffect(() => {
        setAvailableTimes(dispatch, data.date);
    }, [data.date, dispatch, setAvailableTimes]);






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
                setData={setData}
            />
            <FormSectionIndication />
            <ContactDetails />
        </section>
    )
}

export default FormSection;