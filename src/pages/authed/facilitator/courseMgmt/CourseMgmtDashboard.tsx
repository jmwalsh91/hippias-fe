import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CourseMgmtDto } from "@/types/types";
import { Link, useLoaderData } from "react-router-dom";

export default function CourseManagementDashboard() {
  const { course, discussions, participants } =
    useLoaderData() as CourseMgmtDto;

  return (
    <div className="bg-gray-900 min-h-screen p-4 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mt-8">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl">{course?.title}</CardTitle>
          </CardHeader>
          <CardContent>{course.description}</CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">Discussions</CardTitle>
              <Link to="discussion/new" className="text-blue-500 hover:text-blue-600">
                Create Discussion
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {discussions &&
              discussions.map((discussion) => (
                <div key={discussion.id}>
                  <h3>{discussion.name}</h3>
                  {discussion.description}
                </div>
              ))}
          </CardContent>
          <CardFooter>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              View All Discussions
            </a>
          </CardFooter>
        </Card>

        <Card className="col-span-1 md:col-span-4">
          <CardHeader>
            <CardTitle className="text-xl">Readings</CardTitle>
          </CardHeader>
          <CardContent>Filler</CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-4">
          <CardHeader>
            <CardTitle className="text-xl">Participants</CardTitle>
          </CardHeader>
          <CardContent>
            {participants &&
              participants.map((participant) => (
                <div key={participant.courseParticipant.id}>
                  <p>{participant.user.name}</p>
                  User Details.
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
