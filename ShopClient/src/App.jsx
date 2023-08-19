
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";

import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import {Provider} from "react-redux";
//import store from "./store";

import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Predict from "./pages/Predict";
import Success from "./pages/Success";



const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  //const user = localStorage.getItem("TOKEN");
  return <div>

    <Router>
      <Switch>
      <Route exact path="/"> <Home /> </Route>
      <Route path="/product/:id"><Product/></Route>
      <Route path="/products"><ProductList /></Route>
      <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      <Route path="/cart"><Cart /> </Route>
      <Route path="/success"><Success/></Route>
      <Route path="/contact"><Contact/> </Route>
      <Route path="/about"><About/> </Route>
      <Route path="/predict"><Predict/> </Route>
      <Route path="/checkout"><Checkout/> </Route>
     
      
      </Switch>
      {/* </Provider> */}
    </Router>
     
  </div>;
};

export default App;