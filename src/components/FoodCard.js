import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const FoodCard = ({ img, name, description, price }) => {

    const articleStyles = {
        width: "271px",
        height: "600px",
        borderTopRightRadius: "16px",
        borderTopLeftRadius: "16px",
        boxShadow: "4px 3px 10px .25px var(--primary-dark)",
        margin: "20px",
        position: "relative",
        color: "var(--primary-dark)"
    }

    return (
        <article style={articleStyles}>
            <img
                style={{
                    borderTopRightRadius: "16px",
                    borderTopLeftRadius: "16px",
                    objectFit: "cover"
                }}
                src={img}
                width="271px"
                height="240px"
                alt={name + description} />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 15px"
                }}
            >
                <h3 className="cardTitle">{name}</h3>
                <p
                style={{color:"var(--secondary-dark-pink)"}}
                className="highlightText"
                >${price.toFixed(2)}</p>
            </div>
            <p
                style={{
                    paddingTop: "15px",
                    paddingLeft: "15px"
                }}
            >{description}</p>
            <a
                style={{
                    display: "flex",
                    alignItems: "center",
                    position: "absolute",
                    bottom: "20px",
                    textDecoration: "none",
                    color: "var(--primary-dark)"
                }}
                href="https://www.littlelemonrestaurant.com/"
                className="leadText"
            ><p
                style={{
                    marginRight: "10px",
                    paddingLeft: "15px",

                }}
            >Order a delivery</p>
                <DeliveryDiningIcon />
            </a>
        </article>
    )
}

export default FoodCard;