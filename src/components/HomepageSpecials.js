import FoodCard from "./FoodCard";
import greeksalad from "../assets/images/greek salad.jpg";
import bruchetta from "../assets/images/bruchetta.svg";
import lemondessert from "../assets/images/lemon dessert.jpg";

const HomepageSpecials = () => {

    const sectionStyles = {
        paddingLeft: "20px",
        paddingRight: "20px",
        minWidth: "85%",
        maxWidth: "970px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }

    const titleDivStyles = {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        color: "var(--primary-dark)"
    }

    return (
        <section style={sectionStyles}>
            <div style={titleDivStyles}>
                <h2 className="displayTitle" >Specials</h2>
                <button style={{maxWidth: "150px"}} className="cta leadText">Online Menu</button>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap"
                }}
            >
                <FoodCard
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                    price={12.99}
                    img={greeksalad}
                    name="Greek Salad"
                />
                <FoodCard
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                    price={5.99}
                    img={bruchetta}
                    name="Bruchetta"
                />
                <FoodCard
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                    price={5.00}
                    img={lemondessert}
                    name="Lemon Dessert"
                />
            </div>
        </section>
    )
}

export default HomepageSpecials;