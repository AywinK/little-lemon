import restaurantfood from "../assets/images/restauranfood.jpg"

const HomepageHero = () => {


    const sectionStyles = {
        width: "100vw",
        marginBottom: "100px",
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        color: "var(--secondary-white)"
    }

    const textDivStyles = {
        maxWidth: "420px",
    }

    const imageDivStyles = {
        transform: "translate(50px, 100px)"
    }
    return (
        <section className="heroBackground" style={sectionStyles}>
            <div style={textDivStyles}>
                <h1
                    className="displayTitle"
                    style={{
                        color: "var(--primary-light)",
                        marginBottom: "-1ch"

                    }}>Little Lemon</h1>
                <h2
                    className="subTitle"
                >Chicago</h2>
                <p
                    style={{ margin: "1ch auto" }}
                    className="subTitle"
                >
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button className="cta leadText">Reserve a Table</button>
            </div>
            <div style={imageDivStyles}>
                <img src={restaurantfood} className="roundedBorder" width="350px" height="529px" alt="succulent food on a platter" />
            </div>
        </section>
    )
}

export default HomepageHero;