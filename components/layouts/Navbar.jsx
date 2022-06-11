import Link from "next/link";
import React from "react";
import { DiCssdeck } from "react-icons/di";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import MobileView from "./Mobile/MobileView";
import { useEffect } from "react";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const [navColor, setnavColor] = useState(false);

  const handleDrawer = () => setDrawer(!drawer);

  useEffect(() => {
    const handleNavColor = () => {
      if (window.scrollY >= 90) {
        setnavColor(true);
      } else {
        setnavColor(false);
      }
    };

    window.addEventListener("scroll", handleNavColor);
  }, []);

  return (
    <div
      className={
        navColor
          ? "fixed w-full h-16 shadow-xl drop-shadow-xl bg-[#ecf0f3] z-[100]"
          : "fixed w-full h-16  bg-slate-900 z-[100]"
      }
    >
      <div className="flex justify-between items-center py-2 w-full px-2 2xl:px-16 ">
        {/* Brand */}
        <div className=" flex items-center">
          <DiCssdeck
            size="3rem"
            className={navColor ? " text-gray-900" : " text-white"}
          />{" "}
          <h3 className={navColor ? "px-1 text-gray-900" : "px-1 text-white"}>
            Portfolio
          </h3>
        </div>
        {/* Nav Links */}
        <div>
          <ul className="hidden md:flex">
            <Link href="/#home">
              <li
                className={
                  navColor
                    ? " ml-10 text-sm uppercase text-gray-900 hover:border-b border-gray-500"
                    : " ml-10 text-sm uppercase text-white hover:border-b border-gray-500"
                }
              >
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li
                className={
                  navColor
                    ? " ml-10 text-sm uppercase text-gray-900 hover:border-b border-gray-500"
                    : " ml-10 text-sm uppercase text-white hover:border-b border-gray-500"
                }
              >
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li
                className={
                  navColor
                    ? " ml-10 text-sm uppercase text-gray-900 hover:border-b border-gray-500"
                    : " ml-10 text-sm uppercase text-white hover:border-b border-gray-500"
                }
              >
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li
                className={
                  navColor
                    ? " ml-10 text-sm uppercase text-gray-900 hover:border-b border-gray-500"
                    : " ml-10 text-sm uppercase text-white hover:border-b border-gray-500"
                }
              >
                projects
              </li>
            </Link>
          </ul>
          <div
            onClick={handleDrawer}
            className=" md:hidden rounded-xl shadow-lg shadow-gray-400 p-1 "
          >
            <AiOutlineMenu
              size="1.5rem"
              className={navColor ? "text-gray-900" : "text-white"}
            />
          </div>
        </div>
        {/* Socials */}
        <div className="hidden md:visible md:flex items-center space-x-3">
          <Link href="https://github.com/delinuxist">
            <BsGithub
              size="1.5rem"
              className={
                navColor
                  ? " text-gray-900 cursor-pointer"
                  : " text-white cursor-pointer"
              }
            />
          </Link>
          <Link href="/">
            <BsLinkedin
              size="1.5rem"
              className={
                navColor
                  ? " text-gray-900 cursor-pointer"
                  : " text-white cursor-pointer"
              }
            />
          </Link>
          <Link href="/">
            <BiMailSend
              size="1.5rem"
              className={
                navColor
                  ? " text-gray-900 cursor-pointer"
                  : " text-white cursor-pointer"
              }
            />
          </Link>
        </div>
      </div>
      {/* Mobile view */}
      <MobileView drawer={drawer} handleDrawer={handleDrawer} />
    </div>
  );
};

export default Navbar;
