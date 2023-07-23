

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
                <button>book a table placeholder</button>
            </div>
        </section>
    )
}

export default HomepageSpecials;