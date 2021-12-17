import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./contexts";
import { WishListProvider } from "./contexts";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <WishListProvider>
        <App />
      </WishListProvider>
    </CartProvider>
  </StrictMode>,
  rootElement
);
