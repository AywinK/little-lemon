
import HomepageHero from "./HomepageHero";
import HomepageSpecials from "./HomepageSpecials";

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
        </main>
    )
};

export default Main;