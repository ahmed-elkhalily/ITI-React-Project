import { Route, Switch } from "react-router-dom";
import { Counter } from "./pages/Counter/Counter.page";
// pages
import Shop from "./pages/shop/Shop.page";
import SingleProduct from "./pages/single-product/SingleProduct.page";
import Home from "./pages/home/Home.page";
import TodoList from "./pages/todo/TodoLIst.page";
import Login from "./pages/login/Login.page";
import Register from "./pages/register/Register.page";
// components
import Menu from "./components/navbar/Navbar.component.jsx";

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
                <Route component={Login} path="/login" />
                <Route component={Register} path="/register" />
            </Switch>
            {/* <Footer /> */}
        </>
    );
}
export default App;
