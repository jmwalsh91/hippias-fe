import React from "react";
import { useLoaderData } from "react-router-dom";
import { Book } from "../../api/methods/Books";
import { BookCard } from "@/components/cards/BookCard";

export default function Example() {
  const { books } = useLoaderData() as { books: Book[] };
  return (
    <div>
      <h1>Example</h1>
      <section className="flex flex-row flex-wrap gap-8">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.Book}
            author={book.Author}
            description={book.description}
          />
        ))}
      </section>
    </div>
  );
}
