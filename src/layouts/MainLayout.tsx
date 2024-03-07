import React from "react";
import Navbar from "../components/nav/Navbar";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <div className="bg-black">{children}</div>
    </div>
  );
}
