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
                maxHeight: "360px",
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

            <div>
                <div
                    style={{
                        position: "relative",
                        width: "360px",
                        height: "360px",
                    }}
                >
                    <img
                        style={{
                            borderRadius: "16px",
                            objectFit: "cover",
                            position: "absolute",
                            bottom: "20px",
                            left: "20px",
                            zIndex: "1",
                            maxWidth: "240px",
                            height: "240px",
                        }}
                        src={imageB}
                    />

                    <img
                        style={{
                            borderRadius: "16px",
                            objectFit: "cover",
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            maxWidth: "240px",
                            height: "240px",
                        }}
                        src={imageA}
                    />
                </div>
            </div>
        </section>
    )
}

export default HomepageAbout;