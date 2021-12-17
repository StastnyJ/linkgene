import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { LayoutProvider } from "./Layout/LayoutContext";
import ScrollToTop from "./Layout/ScrollToTop";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-da966h82.eu.auth0.com"
    clientId="BAI9B8L46EPPtnEUws9SPTOFsQhQp5C9"
    redirectUri={`${window.location.origin}/Profile`}
    cacheLocation="localstorage"
  >
    <BrowserRouter>
      <LayoutProvider>
        <ScrollToTop />
        <App />
      </LayoutProvider>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
