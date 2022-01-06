import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { LayoutProvider } from "./Layout/LayoutContext";
import ScrollToTop from "./Layout/ScrollToTop";
import { MetaMaskProvider } from "metamask-react";

ReactDOM.render(
  <MetaMaskProvider>
    <BrowserRouter>
      <LayoutProvider>
        <ScrollToTop />
        <App />
      </LayoutProvider>
    </BrowserRouter>
  </MetaMaskProvider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
