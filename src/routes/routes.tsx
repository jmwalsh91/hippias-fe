import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Example from "../pages/example/Example";
import { requests } from "../api/axios";
import { agent } from "../api/agent";
import Authors from "@/pages/authors/Authors";
import AuthorDetails from "@/pages/authors/author/AuthorDetails";
import Courses from "@/pages/courses/Courses";
import CourseDetails from "@/pages/courses/details/CourseDetails";

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
            element: <AuthorDetails />,
            loader: async ({ params }) => {
              if (!params.id) return redirect("/authors");
              const id = parseInt(params.id);
              const [author, books] = await Promise.all([
                await agent.Authors.get(id),
                await agent.Books.getBooksByAuthorId(id),
              ]);
              console.log(author);
              return {
                author: author,
                books: books,
              };
            },
          },
        ],
      },
      {
        path: "/courses",
        element: <Courses/>,
        loader: async () => {
          const courses = await agent.Courses.list();
          console.log(courses);
          return {
            courses: courses,
          };
        },
      },
      {
        path: "/courses/:id",
        element: <CourseDetails/>,
        loader: async ({ params }) => {
          if (!params.id) return redirect("/courses");
          const id = parseInt(params.id);
          const { course, books, facilitator } = await agent.Courses.GetCourseWithDetails(id);
          return {
            course: course,
            books: books,
            facilitator: facilitator,
          };
        },
      }
    ],
  },
]);
