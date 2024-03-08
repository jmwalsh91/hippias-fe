import { Author } from "@/api/methods/Authors";
import React from "react";
import { useLoaderData } from "react-router-dom";

type Props = {};

export default function AuthorDetails({}: Props) {
  const { author } = useLoaderData() as { author: Author };
  return (
    <section className={"bg-zinc-300 border-black border-xl"}>
      <h1>{author.name}</h1>
      <p>{author.description}</p>
    </section>
  );
}
