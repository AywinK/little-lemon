import { render, screen, fireEvent } from '@testing-library/react';
import BookingDetails from './components/pages/reserve_a_table/BookingDetails';
import { initialiseTimes, updateTimes } from './components/pages/reserve_a_table/Reservations';

test('renders occasion label in form', () => {
    render(<BookingDetails data={{
        date: "",
        time: "",
        guests: "",
        occasion: ""
    }}
        availableTimesOptions={["17:00", "18:00", "19:00", "20:00,", "21:00", "22:00"]}
    />);
    const labelElement = screen.getByText(/Occasion/);
    expect(labelElement).toBeInTheDocument();
});

test("user can submit form", () => {

    const handleSubmitMock = jest.fn();
    const handleSubmit = handleSubmitMock;


    render(<BookingDetails data={{
        date: "",
        time: "",
        guests: "",
        occasion: ""
    }}
        availableTimesOptions={["17:00", "18:00", "19:00", "20:00,", "21:00", "22:00"]}
        handleSubmit={handleSubmit}
    />);

    const dateInput = screen.getByTestId("res-date");
    const timeSelect = screen.getByTestId("res-time");
    const guestsInput = screen.getByTestId("guests");
    const occasionSelect = screen.getByTestId("occasion");

    fireEvent.change(dateInput, { target: { value: "2023-07-27" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    const submitButton = screen.getByLabelText("Make Your reservation");
    fireEvent.click(submitButton);

    expect(handleSubmitMock).toHaveBeenCalled()

})

test("inititaliseTimes returns time array", () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00,", "21:00", "22:00"];
    const result = initialiseTimes();
    expect(result).toEqual(expectedTimes);
});

test("updateTimes dispatches correct action", () => {
    const mockDispatch = jest.fn();
    const date = new Date()
    updateTimes(mockDispatch, date);

    expect(mockDispatch).toHaveBeenCalledWith({ type: "UPDATE_TIMES", date: date });
})