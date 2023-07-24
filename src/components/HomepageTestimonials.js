import ReviewCard from "./ReviewCard";

const HomepageTestimonials = () => {

    return (
        <section
            style={{
                backgroundColor: "var(--primary-dark)",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h2
                className="displayTitle"
                style={{ color: "var(--primary-light)" }}
            >Testimonials</h2>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "evenly",
                    flexWrap: "wrap",
                    gap: "20px",
                    margin: "5px"
                }}
            >
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </section>
    )
}

export default HomepageTestimonials;