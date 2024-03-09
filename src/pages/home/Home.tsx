import { TypewriterEffect } from "@/components/ace/TypewriterEffect";
import React from "react";

type Props = {};

const titleArray = [
  { text: "Make", className: "text-lime-300 text-7xl" },
  { text: "Curriculums", className: "text-cyan-300 text-7xl underline" },
  { text: "Easier", className: "text-yellow-300 text-7xl" },
  { text: "With", className: "text-red-300 text-7xl" },
  { text: "Hippias", className: "text-violet-300 text-7xl italic" },
];
export default function Home({}: Props) {
  return (
    <div className="block">
      <div className="min-h-screen flex justify-center align-center">
        <div className="self-center text-end">
          <TypewriterEffect words={titleArray} />
        </div>
      </div>
        <div className="min-h-screen">
          <h1 className="text-4xl text-zinc-300">Welcome to Hippias</h1>
          <p className="text-xl  text-zinc-300">
            Hippias is a platform that allows you to create and share
            curriculums with ease.
          </p>
        </div>
    </div>
  );
}
