import restaurant from "./assets/images/restaurant.jpg";

const Hero = () => {

    return (
        <section
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(12,1fr)",
                gridTemplateRows: "repeat(3, 1fr)",
                columnGap: "20px",
                margin: "5px 0px",
                maxHeight: "290px",
                width: "100vw",
            }}
        >

            <img
                style={{
                    gridColumn: "1/ span 12",
                    gridRow: "1/ span 3",
                    objectFit: "cover",
                    width: "100%",
                    height: "100%"
                }}
                src={restaurant}
                alt="View from restaurant rooftop area" />

            <h1
                className="displayTitle"
                style={{
                    gridColumn: "4/ span 6",
                    gridRow: "1/ span 1",
                    color: "var(--primary-dark)"
                }}
            >Reserve a Table</h1>
        </section>
    )
}

export default Hero;