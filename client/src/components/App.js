import React, { useEffect } from "react";
import './App.css';
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import useAuthentication from "../lib/hooks/useAuthentication";
import Home from "./Home";
import About from "./Misc/About";
import Help from "./Misc/Help";
import Deals from "./Misc/Deals";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Checkout from "./Checkout";
import Success from "./Checkout/Success";
import Cancel from "./Checkout/Cancel";
import Cart from "./Cart";
import Layout from "./Layout";
import Contact from "./Contact/Contact";
import ProductScreen from "./ProductScreen/ProductScreen"
import MyOrder from "./Misc/MyOrder"
import test from "./Test/Test"
import Pdf from "./Pdf/PdfIndex"

const App = () => {
  const dispatch = useDispatch();
  const { handleAuthentication } = useAuthentication(dispatch);

  useEffect(() => {
    handleAuthentication();
  }, []);
  
  return (
    <Layout>

      <Route exact path="/" component={Home} />

      <Route path="/about" component={About} />
      <Route path="/test" component={test} />
      <Route path="/Pdf" component={Pdf} />
      <Route path="/help" component={Help} />
      <Route path="/deals" component={Deals} />
      <Route path="/Contact" component={Contact} />
      {/* <Route path="/ProductScreen" component={ProductScreen} /> */}
      <Route path="/ProductScreen/:id" component={ProductScreen} />
      <Route path="/MyOrder" component={MyOrder} />

      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />

      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/success" component={Success} />
      <Route path="/cancel" component={Cancel} />

    </Layout>
  );
};
export default App;
