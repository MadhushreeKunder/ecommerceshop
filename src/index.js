import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider, ProductProvider } from "./contexts";
import { WishListProvider } from "./contexts";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AuthProvider } from "./auth/authContext";
import { UserProvider } from "./contexts/userContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <CartProvider>
            <WishListProvider>
              <ProductProvider>
                <App />
              </ProductProvider>
            </WishListProvider>
          </CartProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
