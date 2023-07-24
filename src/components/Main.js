
import HomepageHero from "./HomepageHero";
import HomepageSpecials from "./HomepageSpecials";
import HomepageTestimonials from "./HomepageTestimonials";

const Main = () => {

    const styles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <main style={styles}>
            <HomepageHero />
            <HomepageSpecials />
            <HomepageTestimonials />
        </main>
    )
};

export default Main;