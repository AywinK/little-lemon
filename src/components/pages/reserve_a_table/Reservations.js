import FormSection from "./FormSection";
import Hero from "./Hero";
import { useReducer } from "react";
import { fetchAPI } from "../../../../src/apis/bookingAPI";

const UPDATE_TIMES = "UPDATE_TIMES";

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_TIMES:
            // logic to update times based on date input
            return fetchAPI(action.date)
        default:
            return state;
    }
}

const initialiseTimes = () => {
    const date = new Date();
    const timesArr = fetchAPI(date);
    return timesArr;
    return ["17:00", "18:00", "19:00", "20:00,", "21:00", "22:00"];
}

const updateTimes = (dispatch, date) => {
    dispatch({ type: UPDATE_TIMES, date: date });
}

const Reservations = () => {

    // const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00,", "21:00", "22:00"]);

    const [availableTimes, dispatch] = useReducer(reducer, [], initialiseTimes);

    return (
        <main>
            <Hero />
            <FormSection availableTimes={availableTimes} setAvailableTimes={updateTimes} dispatch={dispatch} />
        </main>
    )
}

export { updateTimes, initialiseTimes };
export default Reservations;