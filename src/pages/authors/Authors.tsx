import { Author } from "@/api/methods/Authors";
import React from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

type Props = {};

export default function Authors({}: Props) {
  const { authors } = useLoaderData() as { authors: Author[] };
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className="w-64 bg-gray-200 min-h-screen">
        <h1>Authors</h1>
        <section className="flex flex-col flex-wrap gap-8">
          {authors.map((author) => (
            <div
              key={author.id}
              className="flex flex-col items-center justify-center"
              onClick={() => navigate(`${author.id}`)}
            >
              <h1>{author.name}</h1>
            </div>
          ))}
        </section>
      </div>
      <Outlet />
    </div>
  );
}
