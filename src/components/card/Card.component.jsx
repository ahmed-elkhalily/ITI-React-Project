import { Card as BootstarpCard } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Card.component.scss";
const Card = ({ product }) => {
    const { id, title, image, description, category, price, rating } = product;
    return (
        <Link
            className="card__link col-3 m-2 col-offset-2 gap-2"
            to={`/shop/${id}`}
        >
            <BootstarpCard>
                <BootstarpCard.Img
                    className="card__img"
                    variant="top"
                    src={image}
                />
                <BootstarpCard.Body>
                    <BootstarpCard.Title>
                        {title.length > 25
                            ? title.slice(0, 25).concat("...")
                            : title}
                    </BootstarpCard.Title>
                    <BootstarpCard.Text>
                        {description.length > 75
                            ? description.slice(0, 75).concat("...")
                            : description}
                    </BootstarpCard.Text>
                </BootstarpCard.Body>
                <div className="card__footer">
                    <div>price: {price}</div>
                    <div>category: {category}</div>
                    <div className="card__rating">rating: {rating.rate}</div>
                </div>
            </BootstarpCard>
        </Link>
    );
};
export default Card;
