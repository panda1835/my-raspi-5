"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full p-5 bg-gray-800 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Phuc's Raspberry Pi 5</h1>
        {/* Hamburger Button */}
        <button className="sm:hidden" onClick={toggleMenu}>
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Normal Menu (Visible on larger screens) */}
        <ul className="hidden sm:flex sm:items-center space-x-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/stats">Stats</Link>
          </li>
        </ul>
      </div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white text-black shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <button className="absolute top-5 right-5" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col items-start mt-20 p-4 space-y-6">
          <li className="text-lg">
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="text-lg">
            <Link href="/stats" onClick={toggleMenu}>
              Stats
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
