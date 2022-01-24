import "./styles.css";
import {
  ProductListing,
  Cart,
  WishList,
  Home,
  ProductDetail,
  Login,
  SignUp,
  NavBar,
} from "./components";

import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/privateRoute";

export default function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          {/* <Route path="/products/:productId" element={<ProductDetail />} /> */}
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <PrivateRoute>
                <WishList />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}
