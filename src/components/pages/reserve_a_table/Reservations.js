import FormSection from "./FormSection";
import Hero from "./Hero";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../../../../src/apis/bookingAPI";

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
    const date = new Date().getDate();
    const timesArr = fetchAPI(date);
    return timesArr;
}

const updateTimes = (dispatch, date) => {
    dispatch({ type: UPDATE_TIMES, date: date });
}

// const handleSubmit = (e, data) => {
//     e.preventDefault();
//     console.log(e.target)
//     // setData({
//     //     date: e.target["res-date"].value,
//     //     time: e.target["res-time"].value,
//     //     guests: e.target["guests"].value,
//     //     occasion: e.target["occasion"].value
//     // });
// }

const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    return isSubmitted;
}

const Reservations = () => {

    // const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00,", "21:00", "22:00"]);

    const [availableTimes, dispatch] = useReducer(reducer, [], initialiseTimes);

    return (
        <main>
            <Hero />
            <FormSection submitForm={submitForm} availableTimes={availableTimes} setAvailableTimes={updateTimes} dispatch={dispatch} />
        </main>
    )
}

export { updateTimes, initialiseTimes };
export default Reservations;