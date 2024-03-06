import { requests } from "../axios";

export interface Book {
  id: number;
  Book: string;
  Author: string;
  description: string;
  Year: number;
}
export const Books = {
  list: async () => await requests.get<Book[]>("/list"),
};
