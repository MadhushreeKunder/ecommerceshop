import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./contexts";
import { WishListProvider } from "./contexts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, CartHeader, ProductListing, Home, WishList } from "./components";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishListProvider>
          <App />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
          </Routes>
        </WishListProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
