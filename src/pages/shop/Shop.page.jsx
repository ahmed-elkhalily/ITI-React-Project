import { Container, Spinner, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Card from "../../components/card/Card.component";
import "./Shop.page.scss";

const Shop = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="shop">
            <Container>
                <h2 className="my-3 text-center">Shop Page</h2>
                <Row className="shop__wrapper justify-content-center mt-5">
                    {products ? (
                        products.map((product) => (
                            <Card key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="shop__spinner-container">
                            <Spinner animation="grow" variant="dark" />
                        </div>
                    )}
                </Row>
            </Container>
        </div>
    );
};
export default Shop;
