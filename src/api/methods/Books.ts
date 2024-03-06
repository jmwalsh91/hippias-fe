import { requests } from "../axios"

interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
}
export const Books = {
    list: async () => await requests.get<Book[]>("/books"),
}