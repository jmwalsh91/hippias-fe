import { Book } from "@/api/methods/Books";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  books: Book[];
};
export default function BooksTable({ books }: Props) {
  return (
    <Table>
      <TableCaption>Books</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Year</TableHead>
          <TableHead className="text-right">Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.map((book) => (
          <TableRow key={book.id}>
            <TableCell className="font-medium">{book.title}</TableCell>
            <TableCell>{book.Author}</TableCell>
            <TableCell>{book.Year}</TableCell>
            <TableCell className="text-right">{book.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
