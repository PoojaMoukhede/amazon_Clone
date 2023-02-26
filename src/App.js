import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Order/Orders.js";
import { useNavigate } from 'react-router-dom';

const promise = loadStripe(
  "pk_test_51LFgpvF3oeaFZvcR42YhjIj4cbs5OrXHildtgt6vAuvph0QPhBahVFZrPXjkDgfOJqZuDde0jODHHCGowk0ZFmif00SNh4J0Tz"
);
function App() {

  (

    <>
      <Router>


        <div className="app">

          <Routes>
            <Route path="/orders" element={[<Header />, <Orders />]} />
            <Route path="/login" element={<Login />} />                  
            <Route path="/checkout" element={[<Header />, <Checkout />]} />  
            <Route
              path="/payment"
              element={[
                <Header />,
                <Elements stripe={promise}>
                  <Payment />
                </Elements>,
              ]}
            />                                                           
            <Route path="/" element={[<Header />, <Home />]} />         
          </Routes>



        </div>
      </Router>



    </>
  );




}

export default App;
