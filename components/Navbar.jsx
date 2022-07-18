import React, { useState, useEffect  } from "react";
import Link from "next/link";

const Navbar = () => {
  const defaultColor = "transparent";
  const defaultTextColor = "white";

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(defaultColor);
  const [textColor, setTextColor] = useState(defaultTextColor);

  const handleNav = () => {
    setNav(!nav);
  }

  const handleScroll = () => {
    if (window.scrollY >= 90) {
      setColor("black");
      setTextColor("white");
    } else {
      setColor(defaultColor);
      setTextColor(defaultTextColor);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }
  , [])

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full ease-in duration-300 z-10"
    >
      <div className="max-w-[1740px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <button style={{ color: `${textColor}` }} className="font-bold text-5xl">
            The Commune
          </button>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 hover:text-blue-500">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:text-blue-500">
            <Link href="/#restaurats">Restaurats</Link>
          </li>
          <li className="p-4 hover:text-blue-500">
            <Link href="/events">Events</Link>
          </li>
          <li className="p-4 hover:text-blue-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/*  Mobile Button  */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          Nav
          {/* {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )} */}
        </div>
        {/*  Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/portfolio">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
