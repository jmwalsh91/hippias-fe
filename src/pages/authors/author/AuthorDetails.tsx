import { Author } from "@/api/methods/Authors";
import { Book } from "@/api/methods/Books";
import { BookCard } from "@/components/cards/BookCard";
import React from "react";
import { useLoaderData } from "react-router-dom";

type Props = {};

export default function AuthorDetails({}: Props) {
  const { author, books } = useLoaderData() as {
    author: Author;
    books: Book[];
  };
  return (
    <section className={"bg-zinc-300 border-zinc-200 shadow-xl m-8 p-8"}>
      <h1 className="text-end text-3xl">{author.name}</h1>
      <p className="text-end text-xl">{author.description}</p>
      <section className="p-24 flex flex-row flex-wrap gap-8">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.Author}
            description={book.description}
          />
        ))}
      </section>
    </section>
  );
}
