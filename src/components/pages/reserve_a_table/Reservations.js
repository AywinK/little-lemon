import FormSection from "./FormSection";
import Hero from "./Hero";
import { useState, useReducer } from "react";

const Reservations = () => {

    // const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00,", "21:00", "22:00"]);

    const UPDATE_TIMES = "UPDATE_TIMES"

    const reducer = (state, action) => {
        switch (action.type) {
            case UPDATE_TIMES:
                // logic to update times based on date input
                return initialiseTimes();
            default:
                return state;
        }
    }

    const initialiseTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00,", "21:00", "22:00"];
    }


    const [availableTimes, dispatch] = useReducer(reducer, [], initialiseTimes);

    const updateTimes = (date) => {
        dispatch({ type: UPDATE_TIMES, date: date });
    }

    return (
        <main>
            <Hero />
            <FormSection availableTimes={availableTimes} setAvailableTimes={updateTimes} />
        </main>
    )
}

export default Reservations;