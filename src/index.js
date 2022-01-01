import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./contexts";
import { WishListProvider } from "./contexts";
import { BrowserRouter} from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishListProvider>
          <App />  
        </WishListProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
