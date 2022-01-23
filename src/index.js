import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider, ProductProvider } from "./contexts";
import { WishListProvider } from "./contexts";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AuthProvider } from "./auth/authContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishListProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </WishListProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
