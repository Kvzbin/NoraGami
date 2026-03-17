import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-4xl mx-auto px-4 md:px-0 flex py-4 items-center justify-between border-b-[.5px] border-gray-600 relative z-50">
      <div className="flex gap-10 items-center">
        <img
          className="h-10 w-24 rounded-full object-cover"
          src="/src/Utils/Refokus_logo.jpg"
          alt="Logo_Main"
        />

        <ul className="hidden md:flex gap-10 text-xs font-semibold">
          {["Home", "Work", "Culture", "|", "News"].map((elem, idx) => {
            if (elem === "|") {
              return (
                <span key={idx} className="text-gray-400 cursor-default">
                  |
                </span>
              );
            }

            return (
              <Link
                key={idx}
                to={`/${elem.toLowerCase()}`}
                className="flex items-center gap-1 hover:text-green-500 transition-colors"
              >
                {/* Green dot for the second item */}
                {idx === 1 && (
                  <span className="inline-block w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                )}
                {elem}
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="hidden md:block">
        <Button />
      </div>

      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {isOpen && (
        <div className="absolute top-[100] left-0 w-full bg-[#111] border-b border-gray-600 md:hidden flex flex-col p-6 gap-6 z-40 shadow-xl">
          <ul className="flex flex-col gap-6 text-sm font-semibold">
            {["Home", "Work", "Culture", "News"].map((elem, idx) => (
              <Link
                key={idx}
                to={`/${elem.toLowerCase()}`}
                className="flex items-center gap-2 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {elem === "Work" && (
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full"></span>
                )}
                {elem}
              </Link>
            ))}
          </ul>
          <div className="mt-4">
            <Button />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
