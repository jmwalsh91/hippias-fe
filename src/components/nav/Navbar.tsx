import React, { useState } from "react";
import { constants } from "../../utils/constants/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <a
                href="#"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <span className="font-bold">Brand</span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {constants.navLinks.map((link, index) => (
                <a
                  href={link.path}
                  key={index}
                  tabIndex={index}
                  className="py-5 px-3 hover:text-gray-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        {constants.navLinks.map((link, index) => (
          <a
            href={link.path}
            key={index}
            tabIndex={index}
            className="py-5 px-3 hover:text-gray-800"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
