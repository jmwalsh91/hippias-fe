import { Book } from "@/api/methods/Books";
import { Course } from "@/api/methods/Courses";
import { Facilitator } from "@/api/methods/Facilitator";
import React from "react";
import { useLoaderData } from "react-router-dom";

type Props = {};

export default function CourseDetails({}: Props) {
  const { course, books, facilitator } = useLoaderData() as {
    course: Course;
    books: Book[];
    facilitator: Facilitator;
  };

  return (
    <div className="w-full min-h-screen bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
          <div
            className="bg-cover bg-center h-96 relative"
            style={{ backgroundImage: `url(${course.photo_url})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl text-white font-bold">
                {course.title}
              </h1>
            </div>
          </div>
          <div className="p-8">
            <p className="text-xl text-gray-300">{course.description}</p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <div
              className="bg-cover bg-center h-96 relative"
              style={{ backgroundImage: `url(${facilitator.photo_url})` }}
            ></div>
            <div className="p-6">
              <h2 className="text-2xl text-white font-bold mb-4">
                About {facilitator.name}
              </h2>
              <p className="text-lg text-gray-300">{facilitator.bio}</p>
            </div>
          </div>
          <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl text-white font-bold mb-4">
                Course Books
              </h2>
              <ul className="space-y-4">
                {books.map((book) => (
                  <li className="flex items-center" key={book.id}>
                    <div className="ml-4">
                      <h3 className="text-xl text-white font-bold">
                        {book.title}
                      </h3>
                      <p className="text-gray-400">{book.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
