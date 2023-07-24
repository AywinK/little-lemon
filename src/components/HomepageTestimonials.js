import ReviewCard from "./ReviewCard";
import Jimmy from "../assets/images/Jimmy.png";
import Jane from "../assets/images/Jane.png";
import Shannon from "../assets/images/Shannon.png";
import Lee from "../assets/images/Lee.png";

const HomepageTestimonials = () => {

    return (
        <section
            style={{
                backgroundColor: "var(--primary-dark)",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "40px 20px"
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
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                    gap: "20px",
                    margin: "5px"
                }}
            >
                <ReviewCard img={Jimmy} review="amazing food and amazing atmosphere" rating={5} name="Jimmy" />
                <ReviewCard img={Jane} review="best food in town and friendly staff" rating={5} name="Jane" />
                <ReviewCard img={Shannon} review="best value for money" rating={4} name="Shannon" />
                <ReviewCard img={Lee} review="great specials" rating={4} name="Lee" />
            </div>
        </section>
    )
}

export default HomepageTestimonials;