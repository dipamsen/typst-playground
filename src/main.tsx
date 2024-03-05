import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import code from "./code.ts";
import { StoreProvider } from "easy-peasy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const theme = createTheme({ palette: { mode: "dark" } });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider store={code}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);
