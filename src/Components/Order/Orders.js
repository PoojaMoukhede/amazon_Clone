import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Order from "./Order";
import "./Orders.css";
// import { useStateValue } from "../../StateProvider";
// import { cartReducer } from '../../store/reducers/cart';

function Orders() {
  // const [{ basket, user }, dispatch] = useStateValue();
  // const [orders, setOrders] = useState([]);


  const { basket: orders } = useSelector((state) => state.cartReducer);


  // useEffect(() => {

  //   console.log(basket
  //   )
  //   if (user) {
  //     console.log("user")
  //   } else {
  //     setOrders([]);
  //   }
  // }, [user]);
  useEffect(() => {

    // console.log({ basket })



  });

  return (


    <div className="orders">
      <h1>Your Orders</h1>

      {orders.length == 0 ? <h3>NO orders</h3> : <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>}


    </div>

  );
}

export default Orders;