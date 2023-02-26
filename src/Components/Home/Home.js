import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(null)


  useEffect(() => {

    let token = sessionStorage.getItem("Auth-Token")


    setAuthorized(token)
  })


  if (!authorized) {
    navigate('/login');

  }

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/AugART/Teaser/PC/revised/V1/FIle-1_PC_01.jpg'
          alt="banner"
        />

        <div className="home__row">
          <Product
            id="123"
            title="Amazon Echo (4th Gen) with Built-in Alexa Smart Wi-Fi Speaker (Controls Smart Devices, Black)"
            price={9990}
            image="https://i.gadgets360cdn.com/products/large/amazon-echo-dot-4th-gen-850x800-1601012320.jpg"
            rating={4}
          />
          <Product
            id="094"
            title="Havells Fresco I 24 litres Personal Air Cooler (Dust Filter Net, GHRACAOE190, White)"
            price={3990}
            image="https://media.croma.com/image/upload/v1652955188/Croma%20Assets/Large%20Appliances/Air%20Cooler/Images/202192_uiixjy.png"
            rating={5}
          />
          <Product
            id="023"
            title="Pigeon Healthifry digital airfryer 4.2 L 1200W Air Fryer  (4.2 L)"
            price={8099}
            image="https://rukminim1.flixcart.com/image/416/416/xif0q/air-fryer/p/b/x/-original-imagj84hceh4htfd.jpeg?q=70"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="5441"
            title="Apple Watch Series 3 (GPS, 38MM) - Silver Aluminum Case with White Sport Band (Renewed)"
            price={159.99}
            image="https://m.media-amazon.com/images/I/71UJtA8cFJL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="820"
            title="Wonderchef Regalia Fully-Automatic Coffee Machine"
            price={11879}
            image="https://m.media-amazon.com/images/I/51Oodz2v1+L._SL1100_.jpg"
            rating={4}
          />
          <Product
            id="863"
            title="2022 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (5th Generation)"
            price={299.0}
            image="https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_UY218_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="53287"
            title="Samsung Odyssey 49-in Gaming G9 Computer Monitor LC49G97TSSNXDC"
            price={1099.9}
            image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="123"
            title="Amazon Echo (4th Gen) with Built-in Alexa Smart Wi-Fi Speaker (Controls Smart Devices, Black)"
            price={9990}
            image="https://i.gadgets360cdn.com/products/large/amazon-echo-dot-4th-gen-850x800-1601012320.jpg"
            rating={4}
          />
          <Product
            id="094"
            title="KitchenAid KSM150PSAQ Artisan Series 5-Qt. Stand Mixer with Pouring Shield - Aqua Sky"
            price={399.0}
            image="https://m.media-amazon.com/images/I/71DAYttsoPL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;