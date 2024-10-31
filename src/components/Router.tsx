import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "../pages/Homepage";
import RecipesPage from "../pages/RecipesPage";
import DetailsPage from "../pages/DetailsPage";
import About from "../pages/About";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/recipes",
          element: <RecipesPage />,
        },
        {
          path: "/recipes/:id",
          element: <DetailsPage />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
