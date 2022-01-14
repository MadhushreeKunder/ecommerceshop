import "./styles.css";
import {
  ProductListing,
  Cart,
  CartHeader,
  WishList,
  Home,
  ProductDetail,
} from "./components";
import { Link, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="nav-header">
        <div class="nav-top nav-top-flex">
          <button class="nav-toggle" aria-label="open navigation">
            <span class="hamburger"></span>
          </button>
          <a className="nav-logo flex" href="#">
            <img
              src="images/logo1.png"
              className="logo-img"
              alt="CORAL-UI"
            ></img>
            <h1>CORAL</h1>
          </a>
          <nav class="nav">
            <ul class="nav-list nav-list--primary">
              <li class="nav-item">
                <Link className="nav-link button button-primary" to="/">
                  Home{" "}
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link button button-primary" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link button button-primary" to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link button button-primary" to="/wishlist">
                  WishList
                </Link>
              </li>
            </ul>
            <ul class="nav-list nav-list--secondary">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Log In
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link nav-link--button">
                  Sign up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="app-body">
        <CartHeader />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
}
