import "./styles.css";
import {
  ProductListing,
  Cart,
  WishList,
  Home,
  ProductDetail,
  Login,
  SignUp,
} from "./components";

import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [isNavVisible, setNavVisible] = useState("false");

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <div className="App">
      <header className="nav-header">
        <div className="nav-top nav-top-flex">
          <button
            className="nav-toggle"
            aria-label="open navigation"
            onClick={toggleNav}
          >
            <span className="hamburger"></span>
          </button>

          <Link to="/">
            <img
              src="images/logo1.png"
              className="logo-img"
              alt="CORAL-UI"
            ></img>
          </Link>
          <nav className={isNavVisible ? "nav" : "nav nav--visible"}>
            <ul className="nav-list nav-list--primary">
              <li className="nav-item">
                <Link className="nav-link button" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link button"
                  data-badge="4"
                  // {itemsInCart.length}
                  to="/cart"
                >
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link button"
                  data-badge="3"
                  // {itemsInWishList.length}
                  to="/wishlist"
                >
                  WishList
                </Link>
              </li>
            </ul>
            <ul className="nav-list nav-list--secondary">
              <li className="nav-item">
                <Link className="nav-link button " to="/login">
                  Log In{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link button button-secondary nav-link--button"
                  to="/signup"
                >
                  Sign In{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="app-body">{/* <CartHeader />   */}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        {/* <Route path="/products/:productId" element={<ProductDetail />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
