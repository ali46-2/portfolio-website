import { useState, useEffect } from "react";
import Link from "next/link";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
  AiOutlineMail,
} from "react-icons/ai";

import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function Navbar({ theme, handleTheme }) {
  const [shadow, setShadow] = useState(false);
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
  }

  useEffect(() => {
    function handleShadow() {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    }

    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <div
        className={
          shadow
            ? "fixed w-full h-20 z-30 back shadow-lg shadow-black/30 px-12"
            : "fixed w-full h-20 z-30 back px-12"
        }
      >
        <div className="w-full h-full grid grid-cols-3 justify-center items-center">
          <div className="flex justify-start items-center">
            <div
              onClick={handleTheme}
              className="flex justify-center items-center p-2 shadow-md front shadow-black/70 rounded-full cursor-pointer hover:scale-[1.2] transition ease-out duration-300 hover:highlight"
            >
              {theme == "dark" ? (
                <MdDarkMode size={35} />
              ) : (
                <MdLightMode size={35} />
              )}
            </div>
          </div>
          <div>
            <div className="hidden lg:flex justify-center items-center">
              <Link href="/#home" scroll={false}>
                <span className="px-4 text-2xl hover:highlight">Home</span>
              </Link>
              <Link href="/#about" scroll={false}>
                <span className="px-4 text-2xl hover:highlight">About</span>
              </Link>
              <Link href="/#skills" scroll={false}>
                <span className="px-4 text-2xl hover:highlight">Skills</span>
              </Link>
              <Link href="/#projects" scroll={false}>
                <span className="px-4 text-2xl hover:highlight">Projects</span>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-end items-center">
            <div className="flex justify-center items-center p-2 shadow-md front shadow-black/70 rounded-full cursor-pointer hover:scale-[1.2] ease-out duration-300 hover:highlight">
              <Link
                href="https://github.com/ali46-2"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillGithub size={35} />
              </Link>
            </div>

            <div className="flex justify-center items-center p-2 shadow-md front shadow-black/70 rounded-full cursor-pointer hover:scale-[1.2] ease-out duration-300 ml-3 hover:highlight">
              <Link
                href="https://www.linkedin.com/in/ali-murtaza8/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillLinkedin size={35} />
              </Link>
            </div>
            <div className="flex justify-center items-center p-2 shadow-md front shadow-black/70 rounded-full cursor-pointer hover:scale-[1.2] ease-out duration-300 ml-3 hover:highlight">
              <Link
                href="https://medium.com/@ali.462"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillMediumCircle size={35} />
              </Link>
            </div>
            <div className="flex justify-center items-center p-2 shadow-md front shadow-black/70 rounded-full cursor-pointer hover:scale-[1.2] ease-out duration-300 ml-3 hover:highlight">
              <Link
                href="mailto:a.murtaza808@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiOutlineMail size={35} />
              </Link>
            </div>
          </div>

          <div className="flex justify-end items-center lg:hidden">
            <div
              onClick={handleMenu}
              className="flex justify-center items-center p-2 shadow-md front shadow-black/70 rounded-full cursor-pointer hover:scale-[1.2] ease-out duration-300 hover:highlight"
            >
              <AiOutlineMenu size={35} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          menu
            ? "fixed top-0 w-full h-screen bg-black/80 lg:hidden ease-out duration-500 z-50"
            : "fixed top-0 w-full h-screen lg:hidden ease-out duration-500 z-50 pointer-events-none"
        }
      >
        <div
          className={
            menu
              ? "fixed top-0 right-0 w-full sm:w-[60%] md:w-[50%] h-screen back translate-x-0 ease-out duration-500"
              : "fixed top-0 right-0 w-full sm:w-[60%] md:w-[50%] h-screen back translate-x-full ease-out duration-500"
          }
        >
          <div className="w-full h-full flex flex-col">
            <div className="flex justify-end items-center py-6 px-8">
              <div
                onClick={handleMenu}
                className="flex justify-center items-center p-2 shadow-md front shadow-black/70 rounded-full cursor-pointer hover:scale-[1.2] ease-out duration-300 hover:highlight"
              >
                <AiOutlineClose size={35} />
              </div>
            </div>

            <div className="h-[30%] flex flex-col justify-between items-center mt-4">
              <Link href="/#home" scroll={false}>
                <span
                  onClick={handleMenu}
                  className="px-4 text-2xl md:text-3xl hover:highlight"
                >
                  Home
                </span>
              </Link>
              <Link href="/#about" scroll={false}>
                <span
                  onClick={handleMenu}
                  className="px-4 text-2xl md:text-3xl hover:highlight"
                >
                  About
                </span>
              </Link>
              <Link href="/#skills" scroll={false}>
                <span
                  onClick={handleMenu}
                  className="px-4 text-2xl md:text-3xl hover:highlight"
                >
                  Skills
                </span>
              </Link>
              <Link href="/#projects" scroll={false}>
                <span
                  onClick={handleMenu}
                  className="px-4 text-2xl md:text-3xl hover:highlight"
                >
                  Projects
                </span>
              </Link>
            </div>

            <div className="text-center mt-20">
              <span className="text-3xl md:text-4xl font-bold highlight">
                Let's Connect
              </span>
            </div>

            <div className="flex justify-center mt-4">
              <div className="flex justify-center items-center p-2 shadow-md front shadow-black/70 rounded-full cursor-pointer hover:scale-[1.2] ease-out duration-300 mx-2 hover:highlight">
                <Link
                  href="https://github.com/ali46-2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiFillGithub size={35} />
                </Link>
              </div>

              <div className="flex justify-center items-center p-2 shadow-md front shadow-black/70 rounded-full cursor-pointer hover:scale-[1.2] ease-out duration-300 mx-2 hover:highlight">
                <Link
                  href="https://www.linkedin.com/in/ali-murtaza8/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiFillLinkedin size={35} />
                </Link>
              </div>
              <div className="flex justify-center items-center p-2 shadow-md front shadow-black/70 rounded-full cursor-pointer hover:scale-[1.2] ease-out duration-300 mx-2 hover:highlight">
                <Link
                  href="https://medium.com/@ali.462"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiFillMediumCircle size={35} />
                </Link>
              </div>
              <div className="flex justify-center items-center p-2 shadow-md front shadow-black/70 rounded-full cursor-pointer hover:scale-[1.2] ease-out duration-300 mx-2 hover:highlight">
                <Link
                  href="mailto:a.murtaza808@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiOutlineMail size={35} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
