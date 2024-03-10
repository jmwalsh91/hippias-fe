import { Course } from "@/api/methods/Courses";
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

type Props = {};

export default function Courses({}: Props) {
  const { courses } = useLoaderData() as { courses: Course[] };
  const navigate = useNavigate();
  return (
    <div className="h-full">
      <h1>Courses</h1>

      {courses.map((course) => (
        <div
          key={course.id}
          className="m-8 items-center justify-center cursor-default rounded-md text-center hover:shadow-lg hover:shadow-cyan-500 hover:scale-105 bg-zinc-300 focus:shadow-cyan-500 focus:shadow-xl w-full h-24 "
        >
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <button
            onClick={() => navigate(`${course.id}`)}
            className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
          >
            Details
          </button>
        </div>
      ))}
    </div>
  );
}
