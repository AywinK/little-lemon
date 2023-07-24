

const ReviewCard = ({ rating = 5, name = "Jane", img, review = "test" }) => {

    return (
        <article
            style={{
                height: "200px",
                width: "200px",
                backgroundColor: "var(--secondary-white)",
                borderTopRightRadius: "16px",
                borderTopLeftRadius: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                gap: "20px"
            }}
        >
            <div
                className="star"
                style={{
                    width: `${rating * 30}px`,
                    height: "30px",
                }}
            ></div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px"
                }}
            >
                <img src={img} alt={name} />
                <h3 className="cardTitle">{name}</h3>
            </div>

            <q style={{ color: "var(--secondary-black)" }}>{review}</q>

        </article>
    )
}

export default ReviewCard;