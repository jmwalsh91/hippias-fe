import { Course } from "@/api/methods/Courses";
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
  courses: Course[];
};
export default function CoursesTable({ courses }: Props) {
  return (
    <Table>
      <TableCaption>Courses</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Facilitator</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course) => (
          <TableRow key={course.id}>
            <TableCell className="font-medium">{course.title}</TableCell>
            <TableCell>{course.facilitatorId}</TableCell>
            <TableCell>{course.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}