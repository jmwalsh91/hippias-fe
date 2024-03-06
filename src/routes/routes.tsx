import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Example from "../pages/example/Example";
import { requests } from "../api/axios";
import { agent } from "../api/agent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <Example />,
        loader: async () => {
          const books = await agent.Books.list();
          return {
            books: books,
          };
        },
      },
    ],
  },
]);
