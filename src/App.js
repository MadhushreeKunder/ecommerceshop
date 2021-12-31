import { useState } from "react";
import "./styles.css";
import { ProductListing, Cart, CartHeader, WishList } from "./components";

export default function App() {
  const [route, setRoute] = useState("products");
  return (
    <div className="App">
      <header className="nav-header">
        <div className="navigation-desktop">
          <a className="nav-logo flex" href="#">
            <img src="images/logo1.png" className="logo" alt="CORAL-UI"></img>
            <h1>CORAL</h1>
          </a>
          <nav className="nav">
            <ul className="nav-list nav-list--primary">
              <li className="nav-item">
                <button
                  className="nav-link button button-primary"
                  onClick={() => setRoute("products")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link button button-primary"
                  onClick={() => setRoute("cart")}
                >
                  Cart
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link button button-primary"
                  onClick={() => setRoute("wishlist")}
                >
                  Wishlist
                </button>
              </li>
            </ul>
            <ul className="nav-list nav-list--secondary">
              <li className="nav-item">
                <button className="nav-link button button-primary">
                  Sign In
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link button button-primary">
                  Sign up
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="app-body">
        <CartHeader />
        <button
          className={route === "products" ? "button-primary button" : "button"}
          onClick={() => setRoute("products")}
        >
          Products
        </button>{" "}
        <button
          className={route === "cart" ? "button-primary button" : "button"}
          onClick={() => setRoute("cart")}
        >
          Cart
        </button>{" "}
        <button
          className={route === "wishlist" ? "button-primary button" : "button"}
          onClick={() => setRoute("wishlist")}
        >
          Wishlist
        </button>
        {route === "products" && <ProductListing />}
        {route === "cart" && <Cart />}
        {route === "wishlist" && <WishList />}
      </div>
    </div>
  );
}
