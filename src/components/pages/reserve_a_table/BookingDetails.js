
const BookingDetails = ({
    data,
    availableTimesOptions,
    handleSubmit,
    handleDateChange,
    handleTimeChange,
    handleGuestsChange,
    handleOccasionChange
}) => {


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
                }}
                // Adding ARIA roles and attributes
                role="form"
                aria-label="Booking details form"
            >
                <label htmlFor="res-date">Choose date</label>
                <input type="date"
                    id="res-date"
                    onChange={handleDateChange}
                    value={data.date}
                    aria-labelledby="res-date-label"
                    data-testid="res-date"
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    onChange={handleTimeChange}
                    value={data.time}
                    aria-labelledby="res-time-label"
                    data-testid="res-time"
                >
                    {availableTimesOptions}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    onChange={handleGuestsChange}
                    value={data.guests}
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    aria-labelledby="guests-label"
                    aria-describedby="guests-description"
                    data-testid="guests"
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    onChange={handleOccasionChange}
                    value={data.occasion}
                    aria-labelledby="occasion-label"
                    data-testid="occasion"
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input
                    type="submit"
                    value="Make Your reservation"
                    role="button"
                    aria-label="Make Your reservation"
                />
            </form >
        </div>
    )
}

export default BookingDetails;