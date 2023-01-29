import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-y5k0phxec8kjwpie.us.auth0.com"
    clientId="gakBjJGvR6fE1Rcv83qaebYgkihQIFQq"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
    <App />
    </AppProvider>
  </Auth0Provider>,
  document.getElementById("root")
);