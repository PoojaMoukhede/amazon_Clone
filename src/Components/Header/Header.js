import React, { useEffect, useState } from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Login from '../Login/Login';
import { useNavigate } from 'react-router-dom';

function Header() {

  const { basket } = useSelector((state) => state.cartReducer);

  const [authorized, setAuthorized] = useState(null)
  const navigate = useNavigate();


  const signOut = () => {
    sessionStorage.clear()
    navigate('/login');
  }
  const Login = () => {
    navigate('/login');
  }

  useEffect(() => {

    let token = sessionStorage.getItem("Auth-Token")


    setAuthorized(token)
  })
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          placeholder="Search"
          type="text"
        />
        <BiSearchAlt2 className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">


          {authorized ? <button className="header__optionLineOne" onClick={signOut}>

            Sign In


          </button> :

            <button className="header__optionLineOne" onClick={Login}>

              Sign Out


            </button>

          }








        </div>
        {/* </Link> */}
        <Link to="/orders">
          <div className="header__option">
            {/* <span className="header__optionLineOne">Returns</span> */}
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>


        <Link to="/checkout">
          <div className="header__optionBasket">
            <AiOutlineShoppingCart />
            <span style={{ color: 'yellow' }} className="header__OptionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;