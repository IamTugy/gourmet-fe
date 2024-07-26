import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import { Auth0Provider } from '@auth0/auth0-react';

import { routeTree } from "./routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-haim44bkrab8ssbi.us.auth0.com"
      clientId="kP5j4nsSHDrr4P7G2LUiY5Cjxkla339M"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
