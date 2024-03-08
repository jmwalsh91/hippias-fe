import { Author } from "@/api/methods/Authors";
import React from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

type Props = {};

export default function Authors({}: Props) {
  const { authors } = useLoaderData() as { authors: Author[] };
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className="w-64 h-screen overflow-scroll">
        <h1>Authors</h1>
        <section className="flex flex-col flex-wrap gap-8 p-8">
          {authors.map((author) => (
            <div
              key={author.id}
              className="flex flex-col items-center justify-center cursor-default hover:shadow-lg hover:shadow-cyan-500 hover:scale-105 bg-zinc-200 focus:shadow-cyan-500 focus:shadow-xl w-full h-24 "
              onClick={() => navigate(`${author.id}`)}
            >
              <h1>{author.name}</h1>
            </div>
          ))}
        </section>
      </div>
      <div className={"m-8"}>
        <Outlet />
      </div>
    </div>
  );
}
