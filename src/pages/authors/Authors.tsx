import { Author } from "@/api/methods/Authors";
import { motion } from "framer-motion";
import React from "react";
import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router-dom";



export default function Authors() {
  const { authors } = useLoaderData() as { authors: Author[] };
  const navigate = useNavigate();
  return (
    <div className="flex bg-transparent">
      <div className="w-64 bg-transparent h-screen overflow-scroll">
        <h1>Authors</h1>
        <section className="flex flex-col flex-wrap gap-8 p-8">
          {authors.map((author) => (
            <div
              key={author.id}
              className="flex flex-col items-center justify-center cursor-default rounded-md text-center hover:shadow-lg hover:shadow-cyan-500 hover:scale-105 bg-zinc-300 focus:shadow-cyan-500 focus:shadow-xl w-full h-24 "
              onClick={() => navigate(`${author.id}`)}
            >
              <h1>{author.name}</h1>
            </div>
          ))}
        </section>
      </div>
      <motion.div
        key={useLocation().key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-full md:col-span-3 sm:overflow-auto relative z-0"
      >
        <Outlet />
      </motion.div>
    </div>
  );
}
