import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import queryClient from "./services/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import "./assets/style/general.scss";
import "/node_modules/primeflex/primeflex.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </QueryClientProvider>
);
reportWebVitals();
