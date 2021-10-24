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
                    <div className="mb-2">
                        <svg
                            className="icon icon__price"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            style={{
                                marginRight: "0.5rem",
                                fill: "currentcolor",
                                color: "var(--blue-2)",
                            }}
                        >
                            <path d="M22.587 14.624 13.003 5H8.075c.106.357.167.701.173 1.025A1.995 1.995 0 0 1 8 10a1.998 1.998 0 0 1-.738-3.855c.01-.337-.067-.731-.227-1.145H5v8.005l9.623 9.582 7.964-7.963zM8.098 7.02a1.773 1.773 0 0 1-.362.568 2.086 2.086 0 0 1-.719.495A.993.993 0 0 0 8 9a.991.991 0 0 0 .098-1.98zM24 14.625 14.625 24 4 13.421V7.507c-1.123-.512-2.394-1.091-4-1.091v-1c1.611 0 2.92.511 4 .994V4h2.492C5.438 2.47 3.311 1 0 1V0c4.093 0 6.603 2.055 7.661 4h5.757L24 14.625zm-6.997 1.731.521.521-.698.697-.54-.538c-.525.396-1.068.597-1.612.597-.652 0-1.272-.295-1.734-.753l.738-.739c.303.27.631.462 1.049.462.443 0 .896-.228 1.347-.679.361-.359.569-.736.621-1.122a1.087 1.087 0 0 0-1.078-1.258c-.392 0-.875.184-1.475.563-1.225.773-2.402 1.243-3.413.232-.918-.917-.645-2.112-.076-2.938L10 10.749l.698-.699.626.627c.538-.45 1.097-.677 1.663-.677.665 0 1.286.316 1.761.792l-.744.744c-.731-.742-1.624-.545-2.276.106-.322.323-.52.675-.572 1.02-.122.81.6 1.218.961 1.218.338 0 .774-.174 1.456-.584.944-.563 1.593-.804 2.171-.804.513 0 .963.202 1.378.617 1.038 1.038.624 2.351-.119 3.247z" />
                        </svg>
                        {price}
                    </div>
                    <div className="mb-2">
                        <svg
                            className="icon icon__cat"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style={{
                                marginRight: "0.5rem",
                                fill: "currentcolor",
                                color: "var(--blue-2)",
                            }}
                        >
                            <path d="m9.777 2 11.394 11.395-7.78 7.777L2 9.781V2h7.777zm.828-2H0v10.609L13.391 24 24 13.396 10.605 0zM6.501 5c.4 0 .776.156 1.059.438.585.586.585 1.539.001 2.123C7.276 7.844 6.9 8 6.5 8s-.777-.156-1.06-.438a1.503 1.503 0 0 1-.001-2.123A1.495 1.495 0 0 1 6.501 5zm0-1a2.5 2.5 0 1 0 1.767 4.267A2.5 2.5 0 0 0 6.501 4z" />
                        </svg>
                        {category}
                    </div>
                    <div
                        className="card__rating text-end"
                        style={{
                            borderTop: "1px solid var(--blue-2)",
                            paddingTop: "0.5rem",
                        }}
                    >
                        <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            style={{
                                marginRight: "0.5rem",
                                fill: "currentcolor",
                                color: "var(--blue-2)",
                            }}
                        >
                            <path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" />
                        </svg>
                        {rating.rate}
                    </div>
                </div>
            </BootstarpCard>
        </Link>
    );
};
export default Card;
