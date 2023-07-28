import { render, screen, fireEvent } from '@testing-library/react';
import BookingDetails from './components/pages/reserve_a_table/BookingDetails';
import { initialiseTimes, updateTimes } from './components/pages/reserve_a_table/Reservations';
import { fetchAPI } from './apis/bookingAPI';
import { MemoryRouter } from 'react-router-dom';
import ConfirmedBooking from './components/pages/reserve_a_table/ConfirmedBooking';

// test('renders occasion label in form', () => {
//     render(<BookingDetails data={{
//         date: "2023-07-27",
//         time: "18:00",
//         guests: "4",
//         occasion: "Birthday"
//     }}
//         availableTimesOptions={["17:00", "18:00", "19:00", "20:00,", "21:00", "22:00"]}
//     />);
//     const labelElement = screen.getByText(/Occasion/);
//     expect(labelElement).toBeInTheDocument();
// });

test("user can submit form", () => {

    const handleSubmitMock = jest.fn().mockReturnValue(true);
    const setDataMock = jest.fn();

    render(<MemoryRouter><BookingDetails data={{
        date: "2023-07-27",
        time: "17:00",
        guests: "4",
        occasion: "Birthday"
    }}
        availableTimesOptions={["17:00", "18:00", "19:00", "20:00,", "21:00", "22:00"]}
        submitForm={handleSubmitMock}
        setData={setDataMock}
    /></MemoryRouter>);

    const dateInput = screen.getByTestId("res-date");
    const timeSelect = screen.getByTestId("res-time");
    const guestsInput = screen.getByTestId("guests");
    const occasionSelect = screen.getByTestId("occasion");

    fireEvent.change(dateInput, { target: { value: "2023-07-27" } });
    fireEvent.change(timeSelect, { target: { value: "17:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    const submitButton = screen.getByLabelText("Make Your reservation");
    fireEvent.click(submitButton);

    expect(handleSubmitMock).toHaveBeenCalled();

    const debugOutput = screen.debug();
    console.log(debugOutput);
});

test("inititaliseTimes returns time array", () => {
    const date = new Date().getDate();
    const expectedTimes = fetchAPI(date);
    const result = initialiseTimes();
    expect(result).toEqual(expectedTimes);
});

test("updateTimes dispatches correct action", () => {
    const mockDispatch = jest.fn();
    const date = new Date().getDate();
    updateTimes(mockDispatch, date);

    expect(mockDispatch).toHaveBeenCalledWith({ type: "UPDATE_TIMES", date: date });
});

test("user recieves confirmation modal", () => {

    const setSubmissionStatusMock = jest.fn();

    render(
        <MemoryRouter>
            <ConfirmedBooking
                setSubmissionStatus={setSubmissionStatusMock}
                submissionStatus={true}
                data={{
                    date: "2023-07-27",
                    time: "17:00",
                    guests: "4",
                    occasion: "Birthday"
                }}
            />
        </MemoryRouter>
    )

    const modal = screen.queryByRole("dialog");
    expect(modal).toBeInTheDocument();

});