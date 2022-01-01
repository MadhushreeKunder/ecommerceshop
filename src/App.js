import "./styles.css";
import { ProductListing, Cart, CartHeader, WishList, Home, ProductDetail } from "./components";
import { Link, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="nav-header">
        <div className="navigation-desktop">
          <a className="nav-logo flex" href="google.com">
            <img src="images/logo1.png" className="logo" alt="CORAL-UI"></img>
            <h1>CORAL</h1>
          </a>
          <nav className="nav">
            <ul className="nav-list nav-list--primary">
              <li className="nav-item">
                <Link className="nav-link button button-primary" to="/">
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link button button-primary" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
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
