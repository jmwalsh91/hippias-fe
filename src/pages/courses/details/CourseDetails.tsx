import { Course } from "@/api/methods/Courses";
import React from "react";
import { useLoaderData } from "react-router-dom";

type Props = {};

export default function CourseDetails({}: Props) {
  const { course } = useLoaderData() as { course: Course };
  return (
    <div className="">
      <h1>Course Details</h1>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}
