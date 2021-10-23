import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link className="navbar-brand" to="/">
                    ITI React Jobs
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="nav-link" to="/register">
                            Register
                        </Link>
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                        <Link className="nav-link" to="/todo">
                            TodoList
                        </Link>
                        <Link className="nav-link" to="/shop">
                            Shop
                        </Link>
                        <Link className="nav-link" to="/counter">
                            Counter
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Menu;
