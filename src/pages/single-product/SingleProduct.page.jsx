import { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import "./SingleProduct.page.scss";
const SingleProduct = ({ match }) => {
    const [singleProduct, setsingleProduct] = useState(null);
    const { id } = match.params;
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setsingleProduct(data));
        // eslint-disable-next-line
    }, []);

    console.log(singleProduct);
    return singleProduct ? (
        <Container>
            <div className="singleProduct">
                <figure className="singleProduct__img">
                    <img src={singleProduct.image} alt="" />
                </figure>
                <div className="singleProdut__body">
                    <h2 className="singleProduct__title mb-3">
                        {singleProduct.title}
                    </h2>
                    <p className="singleProduct__desc lead mb-3">
                        {singleProduct.title}
                    </p>
                    <p className="singleProduct__category mb-1 lead">
                        category: <strong>{singleProduct.category}</strong>
                    </p>
                    <div className="singleProduct__price">
                        price: <strong>{singleProduct.price} EGY</strong>
                    </div>
                </div>
            </div>
        </Container>
    ) : (
        <div className="product__spinner-container">
            <Spinner animation="grow" variant="dark" />
        </div>
    );
};
export default SingleProduct;
