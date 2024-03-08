import { Author } from "@/api/methods/Authors";
import React from "react";
import { useLoaderData } from "react-router-dom";

type Props = {};

export default function AuthorDetails({}: Props) {
  const { author } = useLoaderData() as { author: Author };
  return (
    <section className={"bg-zinc-300 border-zinc-200 shadow-xl m-8 p-8"}>
      <h1 className="text-end text-3xl">{author.name}</h1>
      <p className="text-end text-xl">{author.description}</p>
    </section>
  );
}
