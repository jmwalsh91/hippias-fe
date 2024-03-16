import { HeroParallax } from "@/components/ace/HeroParallax";
import { TypewriterEffect } from "@/components/ace/TypewriterEffect";
import { constants } from "@/utils/constants/constants";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const titleArray = [
  { text: "Human", className: "text-lime-300 italic text-7xl" },
  { text: "Knowledge", className: "text-cyan-300 text-7xl fw-900" },
  { text: "For", className: "text-yellow-300 text-7xl" },
  { text: "The", className: "text-red-300 text-7xl" },
  { text: "Future", className: "text-violet-300 text-7xl underline" },
];
export default function Home({}: Props) {
  return (
    <div className="block">
      <div className="min-h-screen flex justify-center align-center">
        <div className="self-center text-end">
          <TypewriterEffect words={titleArray} />
        </div>
      </div>
      <div className="">
        <motion.h2
          whileInView={{
            scale: 1.1,
            x: 100,
            opacity: 1,
            transition: {
              duration: 2,
              type: "spring",
            },
          }}
          initial={{ opacity: 0 }}
          className="text-6xl text-center text-zinc-300"
        >
          Explore our courses.{" "}
        </motion.h2>
      </div>
      <HeroParallax products={constants.courseMockForHero} />
      <motion.h2
        whileInView={{
          scale: 1.5,
          transition: {
            duration: 1,
            type: "spring",
          },
        }}
        className="text-6xl text-center mb-96 text-cyan-300"
      >
        Education. For the future.{" "}
      </motion.h2>
      <h3 className="text-5xl text-center mx-80 mb-40 text-zinc-300">
      In an era where artificial intelligence is redefining the boundaries of academic integrity, Hippias offers a solution that puts critical thinking and authentic engagement at the forefront of education.
      </h3>
      <div className="bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-5xl text-zinc-200 font-bold mb-8">
            Welcome to Hippias
          </h1>
          <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
            Introducing Creo, an innovative platform that reinvents the Socratic
            dialogue for the digital age. Unlike traditional Great Books
            programs, Creo goes beyond the Western canon to foster critical
            thinking skills that will prepare students for the complexities of
            the future. Through real-time video discussions, AI-powered passage
            suggestions, and collaborative annotation tools, Creo cultivates the
            essential skills of analysis, synthesis, and communication. As
            knowledge becomes increasingly decentralized and AI continues to
            reshape the workforce, Creo equips students with the tools to
            navigate an uncertain and dynamic world. Join us in shaping the
            future of education with Creo, where every conversation is an
            opportunity for growth, connection, and discovery.
          </p>
          <p className="text-xl text-zinc-400 leading-relaxed">
            In an era where artificial intelligence is redefining the boundaries
            of academic integrity, Hippias offers a solution that puts critical
            thinking and authentic engagement at the forefront of education.
            Unlike traditional coursework, which can be susceptible to AI-driven
            plagiarism, Hippias's emphasis on live video discussions and
            collaborative reading experiences makes it difficult for students to
            "fake it 'til they make it." With Hippias, educators can be
            confident that their students are actively engaging with the
            material, developing their own thoughts and ideas, and learning from
            each other in real-time. By integrating Hippias into their
            curriculum, educational institutions can ensure that their students
            are not only gaining knowledge, but also honing the skills that will
            be most valuable in an AI-driven future: the ability to think
            critically, communicate effectively, and adapt to a rapidly changing
            world.
          </p>
        </div>
      </div>
    </div>
  );
}
