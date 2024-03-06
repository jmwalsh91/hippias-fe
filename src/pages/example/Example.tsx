import React from "react";
import { useLoaderData } from "react-router-dom";
import { Book } from "../../api/methods/Books";

export default function Example() {
  const { books } = useLoaderData() as {books: Book[]};
  return (
    <div>
      <h1>Example</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.Author}:{book.Book}</li>
        ))}
      </ul>
    </div>
  );
}
