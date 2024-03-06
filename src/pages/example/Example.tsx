import React from "react";
import { useLoaderData } from "react-router-dom";
import { Book } from "../../api/methods/Books";

type Props = {};

export default function Example({}: Props) {
  const { books } = useLoaderData() as {books: Book[]};
  return (
    <div>
      <h1>Example</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
