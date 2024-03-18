import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Button,
} from "@shadcn/ui";

interface Discussion {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
}

export default function DiscussionMgmt() {
  const { courseId } = useParams<{ courseId: string }>();
  const [discussions, setDiscussions] = useState<Discussion[]>([]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Discussion Management</h2>
      <Link to={`/courses/${courseId}/discussions/create`}>
        <Button className="mb-4">Create New Discussion</Button>
      </Link>
      <Table>
        <TableCaption>List of Discussions</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {discussions.map((discussion) => (
            <TableRow key={discussion.id}>
              <TableCell>{discussion.name}</TableCell>
              <TableCell>{discussion.description}</TableCell>
              <TableCell>{discussion.date}</TableCell>
              <TableCell>{discussion.time}</TableCell>
              <TableCell>
                <Link
                  to={`/courses/${courseId}/discussions/${discussion.id}/edit`}
                >
                  <Button variant="outline" className="mr-2">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteDiscussion(discussion.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
