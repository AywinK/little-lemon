

const ReviewCard = ({ rating, name, img, review }) => {

    return (
        <article
            style={{
                height: "200px",
                width: "200px",
                backgroundColor: "var(--secondary-white)"
            }}
        >
            <div
                style={{
                    width: "153px",
                    height: "30px",
                    backgroundColor: "none"
                }}
            ></div>

        </article>
    )
}

export default ReviewCard;