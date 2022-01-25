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
  LogoutUser,
} from "./components";
import { Address, Checkout } from "./checkout";

import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";

export default function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductListing />}></Route>
          {/* <Route path="/products/:productId" element={<ProductDetail />} /> */}
          <PrivateRoute path="/cart" element={<Cart />} />
          <PrivateRoute path="/wishlist" element={<WishList />} />
          <PrivateRoute path="/logout" element={<LogoutUser />} />

          {/* <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/wishlist"
            element={
              <PrivateRoute>
                <WishList />
              </PrivateRoute>
            }
          ></Route> */}
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/address" element={<Address />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </div>
    </div>
  );
}
