import { requests } from "../axios";

export interface Book {
  id: number;
  title: string;
  Author: string;
  description: string;
  Year: number;
}
export const Books = {
  list: async () => await requests.get<Book[]>("/list"),
  getBooksByAuthorId: async (id: number) => await requests.get<Book[]>(`/books/author/${id}`),
};
