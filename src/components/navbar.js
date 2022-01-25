import { NavLink, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../auth/authContext";
import { useUser } from "../contexts";

export function NavBar() {
  const { token } = useAuth();
  const { state } = useUser();
  const [isNavVisible, setNavVisible] = useState("false");

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };
  const totalItems = () => {
    return state?.itemsInCart.reduce((acc, value) => {
      return acc + value.quantity;
    }, 0);
  };

  return (
    <>
      <header className="nav-header">
        <div className="nav-top nav-top-flex">
          <button
            className="nav-toggle"
            aria-label="open navigation"
            onClick={toggleNav}
          >
            <span className="hamburger"></span>
          </button>

          <NavLink end to="/">
            <img
              src="images/logo1.png"
              className="logo-img"
              alt="CORAL-UI"
            ></img>
          </NavLink>
          <nav className={isNavVisible ? "nav" : "nav nav--visible"}>
            <ul className="nav-list nav-list--primary">
              <li className="nav-item">
                <NavLink className="nav-link button" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link button"
                  data-badge={token && totalItems()}
                  //   {itemsInCart.length}
                  to="/cart"
                >
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link button"
                  // data-badge={token && state?.itemsInWishList.length}
                  // {itemsInWishList.length}
                  to="/wishlist"
                >
                  {" "}
                  {token && state?.itemsInWishList?.length}
                  WishList
                </NavLink>
              </li>
            </ul>
            <ul className="nav-list nav-list--secondary">
              <li className="nav-item">
                <NavLink
                  className="nav-link button "
                  to={token? "/logout": "/login"}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <i
                    class="fas fa-user-circle"
                    style={{ fontSize: "1.5rem", marginRight: "5px" }}
                  ></i>{" "}
                  {""} Account
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link button button-secondary nav-link--button"
                  to="/signup"
                >
                  Sign Up{" "}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
