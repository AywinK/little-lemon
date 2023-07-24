
import HomepageHero from "./HomepageHero";
import HomepageSpecials from "./HomepageSpecials";
import HomepageTestimonials from "./HomepageTestimonials";
import HomepageAbout from "./HomepageAbout";

const Main = () => {

    const styles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "5px"
    }

    return (
        <main style={styles}>
            <HomepageHero />
            <HomepageSpecials />
            <HomepageTestimonials />
            <HomepageAbout />
        </main>
    )
};

export default Main;