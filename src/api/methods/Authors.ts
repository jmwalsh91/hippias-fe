import { requests } from "../axios";

export interface Author {
  id: number;
  name: string;
  nationality: string;
  description: string;
}
export const Authors = {
  list: async () => await requests.get<Author[]>("/authors"),
  get: async (id: number) => await requests.get<Author>(`/authors/${id}`),
};
