import { Route, Switch } from "react-router-dom";
import { Counter } from "./pages/Counter/Counter.page";
// pages
import Shop from "./pages/shop/Shop.page";
import SingleProduct from "./pages/single-product/SingleProduct.page";
import Home from "./pages/home/Home.page";
import TodoList from "./pages/todo/TodoLIst.page";
import Menu from "./components/Navbar.component";
import Footer from "./components/footer/Footer.component";

function App() {
    return (
        <>
            <Menu className="mt-5" />
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={Counter} path="/counter" />
                <Route component={Shop} path="/shop" exact />
                <Route component={SingleProduct} path="/shop/:id" />
                <Route component={TodoList} path="/todo" />
            </Switch>
            <Footer />
        </>
    );
}
export default App;
