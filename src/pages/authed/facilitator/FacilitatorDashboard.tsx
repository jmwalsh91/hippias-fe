import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NotificationCard from "./components/NotificationCard";
import { ScrollArea } from "@/components/ui/scroll-area";


const notifications = [
  {
    id: 1,
    time: "30 minutes ago",
    type: "success",
    title: "Course Completed",
    content:
      "Congratulations! You have successfully completed the 'Introduction to Python' course.",
  },
  {
    id: 2,
    time: "1 hour ago",
    type: "warning",
    title: "Session Reminder",
    content:
      "You have an upcoming session 'Data Structures and Algorithms' scheduled for tomorrow at 10:00 AM.",
  },
  {
    id: 3,
    time: "2 hours ago",
    type: "info",
    title: "New Course Available",
    content:
      "A new course 'Machine Learning Fundamentals' has been added to your dashboard.",
  },
  {
    id: 4,
    time: "3 hours ago",
    type: "message",
    title: "New Message from John",
    content:
      "John sent you a message: 'Hey, can you share the resources for the upcoming workshop?'",
  },
];

export default function FacilitatorDashboard({}: Props) {
  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="col-span-1 md:col-span-3 md:row-span-3">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome, Facilitator</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center h-full">
            <p className="text-gray-400 text-lg">Your Dashboard</p>
            {/* Add your main dashboard content here */}
          </CardContent>
          <CardFooter>{/* Add any footer content or actions */}</CardFooter>
        </Card>

        <Card className="col-span-1 md:col-span-2 md:row-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Upcoming Courses</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add a list or grid of upcoming courses */}
          </CardContent>
          <CardFooter>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              View All Courses
            </a>
          </CardFooter>
        </Card>

        <Card className="col-span-1 md:col-start-4 md:row-start-3 md:row-span-3">
          <CardHeader>
            <CardTitle className="text-xl">Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96">
              {notifications.map((notif) => (
                <NotificationCard
                  key={notif.id}
                  time={notif.time}
                  type={notif.type}
                  title={notif.title}
                  content={notif.content}
                />
              ))}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              View All Notifications
            </a>
          </CardFooter>
        </Card>

        <Card className="col-span-1 md:col-start-5 md:row-start-3 md:row-span-3">
          <CardHeader>
            <CardTitle className="text-xl">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              variant="secondary"
              size="lg"
              className="px-6 py-3 flex flex-col h-24 w-full"
            >
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-article"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M7 8h10" />
                  <path d="M7 12h10" />
                  <path d="M7 16h10" />
                </svg>
              </>
              <p>Manage Course</p>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-6 py-3 flex flex-col h-24 w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-article"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M7 8h10" />
                <path d="M7 12h10" />
                <path d="M7 16h10" />
              </svg>
              Add Course
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-6 py-3 flex flex-col h-24 w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-article"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M7 8h10" />
                <path d="M7 12h10" />
                <path d="M7 16h10" />
              </svg>
              Add Book
            </Button>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-3 md:row-span-2 md:row-start-4">
          <CardHeader>
            <CardTitle className="text-xl">Performance Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add charts, graphs, or analytics components */}
          </CardContent>
          <CardFooter className="flex justify-end space-x-4"></CardFooter>
        </Card>
      </div>
    </div>
  );
}
