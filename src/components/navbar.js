import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../auth/authContext";
import { useUser } from "../contexts";
import { totalItems } from "../utils/utils";

export function NavBar() {
  const { token } = useAuth();
  const { userState } = useUser();
  const [isNavVisible, setNavVisible] = useState("false");

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
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
                  data-badge={token && totalItems(userState)}
                  to={token? "/cart" : "/login"}
                >
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link button"
                  data-badge={token && userState?.wishList?.length}
                  // {itemsInWishList.length}
                  to={token? "/cart" : "/wishlist"}
                >
                  {" "}
                  WishList
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link button "
                  to={token ? "/logout" : "/login"}
                  // style={{ display: "flex", alignItems: "center" }}
                >
                  {""} {token ? "Logout" : "Login"}
                </NavLink>
              </li>
            </ul>
            <ul className="nav-list nav-list--secondary">
              <li className="nav-item"></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
