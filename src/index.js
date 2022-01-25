import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ProductProvider } from "./contexts";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { AuthProvider } from "./auth/authContext";
import { UserProvider } from "./contexts/userContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
  rootElement
);
