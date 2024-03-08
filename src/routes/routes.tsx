import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Example from "../pages/example/Example";
import { requests } from "../api/axios";
import { agent } from "../api/agent";
import Authors from "@/pages/authors/Authors";

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
          console.log(books);
          return {
            books: books,
          };
        },
      },
      {
        path: "/authors",
        element: <Authors />,
        loader: async () => {
          const authors = await agent.Authors.list();
          console.log(authors);
          return {
            authors: authors,
          };
        },
        children: [
          {
            path: ":id",
            element: <Example />,
            loader: async ({ params }) => {
              if (!params.id) return redirect("/authors");
              const id = parseInt(params.id);
              const author = await agent.Authors.get(id);
              console.log(author);
              return {
                author: author,
              };
            },
          },
        ],
      },
    ],
  },
]);
