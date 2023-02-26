import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../store/actions/cart.js";
import "./Product.css";


// import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, price, rating }) {

  const dispatch = useDispatch()

  // const [{ basket }, dispatch] = useStateValue();

  const addInBasket = () => {

    let payload = { id, title, image, price, rating }

    dispatch(addToBasket(payload))

    console.log("product page")

    console.log(payload)
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addInBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;