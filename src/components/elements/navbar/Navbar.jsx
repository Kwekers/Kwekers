import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";

export const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuStyle =
    "cursor-pointer text-lg transform hover:scale-110 hover:text-slate-500 font-medium transition-transform duration-300 ease-in-out";

  
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full bg-white">
      <div className="flex justify-between md:justify-around items-center px-8 py-4 h-20 select-none font-montserrat">
        <div
          className="text-3xl font-bold"
        >
          Marchel
        </div>

        <div className="hidden md:flex gap-10">
          <ul className="flex gap-10">
            <li className={menuStyle} onClick={() => scrollToSection("about")}>
              About
            </li>
            <li className={menuStyle} onClick={() => scrollToSection("experience")}>
              Experience
            </li>
            <li className={menuStyle} onClick={() => scrollToSection("project")}>
              Project
            </li>
            <li className={menuStyle} onClick={() => scrollToSection("contact")}>
              Contact
            </li>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      <div
        className={`absolute top-16 left-0 w-screen flex justify-center bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 items-center">
          <li className={menuStyle} onClick={() => scrollToSection("about")}>
            About
          </li>
          <li className={menuStyle} onClick={() => scrollToSection("experience")}>
            Experience
          </li>
          <li className={menuStyle} onClick={() => scrollToSection("project")}>
            Project
          </li>
          <li className={menuStyle} onClick={() => scrollToSection("contact")}>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
