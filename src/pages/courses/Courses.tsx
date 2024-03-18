import { Course } from "@/api/methods/Courses";
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

type Props = {};

export default function Courses({}: Props) {
  const { courses } = useLoaderData() as { courses: Course[] };
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              onClick={() => navigate(`${course.id}`)}
            >
              <div className="relative">
                <img
                  src={course.photo_url}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-300 mb-4">{course.description}</p>
                <div className="w-full flex justify-end">

                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
                  Details
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}