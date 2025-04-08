import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import About from "./pages/About.tsx";
import Realizations from "./pages/Realizations.tsx";
import Contact from "./pages/Contact.tsx";
import Opinions from "./pages/Opinions.tsx";
import Faq from "./pages/FAQ.tsx";
import Services from "./pages/Services.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/realizations",
        element: <Realizations />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/opinions",
        element: <Opinions />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
