import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-3 bg-header w-[90%] md:w-[80%] h-16 m-auto rounded-3xl flex justify-center backdrop-blur-sm	z-999">
      <div className="w-full flex justify-between items-center text-white p-5">
        <h1 className="text-white font-bold text-2xl">Halim Choukani</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex lg:items-center lg:w-auto lg:space-x-6">
          <ul className="flex flex-row gap-1">
            <li>
              <a
                href="#home"
                className="text-xl p-2 px-4 hover:bg-white hover:text-black rounded-xl transition-all"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-xl p-2 px-4 hover:bg-white hover:text-black rounded-xl transition-all"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-xl p-2 px-4 hover:bg-white hover:text-black rounded-xl transition-all"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-xl p-2 px-4 hover:bg-white hover:text-black rounded-xl transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Desktop Language Toggle */}
        <button className="hidden md:flex text-xl">EN</button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <img
            src="/assets/images/menu.svg"
            alt="menu"
            className="w-10 cursor-pointer z-1000"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-[50%] translate-x-[-50%] w-[90%] h-full bg-[#333333] text-white p-5 z-50 md:hidden md:h-1 rounded-3xl transition-all">
          <nav className="flex flex-col items-center justify-between h-full">
            <ul className="flex flex-col items-center justify-center gap-20 w-full p-5">
              <li>
                <a
                  href="#home"
                  className="text-7xl p-2 px-4 hover:bg-white hover:text-black rounded-xl transition-all"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-7xl p-2 px-4 hover:bg-white hover:text-black rounded-xl transition-all"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-7xl p-2 px-4 hover:bg-white hover:text-black rounded-xl transition-all"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-7xl p-2 px-4 hover:bg-white hover:text-black rounded-xl transition-all"
                >
                  Contact
                </a>
              </li>
            </ul>
            <button className="text-7xl">EN</button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
