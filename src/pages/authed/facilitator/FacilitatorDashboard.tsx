import React from "react";

type Props = {};

export default function FacilitatorDashboard({}: Props) {
  return (
    <div className="bg-black ">
      <div className="grid grid-cols-5 grid-rows-5 gap-4 bg-black shadow-lg rounded-lg overflow-hidden min-h-screen min-w-screen">
        <div className="col-span-3 row-span-3 bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        <h3 className="text-left text-3xl text-zinc-300">
                title
            </h3>
        </div>
        <div className="col-span-2 row-span-2 col-start-4 bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <h3 className="text-left text-3xl text-zinc-300">
                title
            </h3>
        </div>
        <div className="row-span-3 col-start-4 row-start-3 bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <h3 className="text-left text-3xl text-zinc-300">
                title
            </h3>
        </div>
        <div className="row-span-3 col-start-5 row-start-3 bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <h3 className="text-left text-3xl text-zinc-300">
                title
            </h3>
        </div>
        <div className="col-span-3 row-span-2 row-start-4 bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <h3 className="text-left text-3xl text-zinc-300">
                title
            </h3>
        </div>
      </div>
    </div>
  );
}
