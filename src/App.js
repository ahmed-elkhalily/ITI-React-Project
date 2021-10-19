import { Route, Switch } from "react-router-dom";
import { Counter } from "./pages/Counter/Counter.page";
import Shop from "./pages/shop/Shop.page";
import SingleProduct from "./pages/single-product/SingleProduct.page";
import Home from "./pages/home/Home.page";

function App() {
    return (
        <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Counter} path="/counter" />
            <Route component={Shop} path="/shop" exact />
            <Route component={SingleProduct} path="/shop/:id" />
        </Switch>
    );
}
export default App;
