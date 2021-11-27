import { useState } from "react";
import "./styles.css";
import { ProductListing, Cart, CartHeader } from "./components";



export default function App() {
  const [route, setRoute] = useState("products");
  return (
    <div className="App">
      <h1 className="app-header"> Coral-Shop</h1>
      <div className="app-body">
        <CartHeader/>
        <button className={route === "products" ? "button-primary button" : "button"} onClick={()=> setRoute("products")}>Products</button>
        <button className={route === "cart" ? "button-primary button" : "button"} onClick={()=> setRoute("cart")}>Cart</button>

        {route === "products" && <ProductListing/>}
        {route === "cart" && <Cart/>}
      </div>
      

      
    </div>
  );
}

