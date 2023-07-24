import imageA from "../assets/images/Mario and Adrian A.jpg";
import imageB from "../assets/images/Mario and Adrian b.jpg";

const HomepageAbout = () => {

    return (
        <section
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px",
                flexWrap: "wrap"
            }}
        >
            <div
                style={{
                    maxWidth: "400px",
                    color: "var(--secondary-black)"
                }}
            >
                <h2
                    className="displayTitle"
                    style={{
                        color: "var(--primary-dark)",
                        marginBottom: "-25px"
                    }}
                >Little Lemon</h2>
                <h3 className="subTitle">Chicago</h3>
                <p
                    style={{
                        marginTop: "25px",
                        marginBottom: "25px"
                    }}
                >Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            <div
                style={{
                    width: "360px",
                    maxHeight: "360px",
                    display: "grid",
                    gridTemplateColumns: "repeat(3,120px)",
                    gridTemplateRows: "repeat(3,120px)",
                    gap: "0px"
                }}
            >
                <img
                    style={{
                        borderRadius: "16px",
                        objectFit: "cover",
                        zIndex: "1",
                        maxWidth: "240px",
                        height: "240px",
                        gridRow: "2/4",
                        gridColumn: "1/2"
                    }}
                    src={imageB}
                />

                <img
                    style={{
                        borderRadius: "16px",
                        objectFit: "cover",
                        maxWidth: "240px",
                        height: "240px",
                        gridRow: "1/2",
                        gridColumn: "2/4"
                    }}
                    src={imageA}
                />
            </div>
        </section>
    )
}

export default HomepageAbout;