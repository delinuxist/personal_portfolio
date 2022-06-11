import React from "react";
import Link from "next/link";
import { DiCssdeck } from "react-icons/di";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const MobileView = ({ drawer, handleDrawer }) => {
  return (
    <div>
      <div
        className={
          drawer
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/10"
            : ""
        }
      >
        <div
          className={
            drawer
              ? " fixed left-0 top-0 w-[75%] sm:[60%] md:w-[45%] bg-[#ecf0f3] p-5 ease-in  duration-500 h-screen"
              : "fixed left-[-200%] top-0  p-5 ease-out duration-500 h-screen"
          }
        >
          <div>
            {/* Mobile view brand and close button */}
            <div className=" flex justify-between items-center">
              {/* Brand */}
              <div className=" flex items-center">
                <DiCssdeck size="3rem" className=" text-gray-900" />{" "}
                <h3 className=" px-1 text-gray-900">Portfolio</h3>
              </div>
              {/* Close button */}
              <div
                onClick={handleDrawer}
                className=" rounded-full shadow-lg p-2 shadow-gray-400 cursor-pointer "
              >
                <AiOutlineClose size="1.5rem" className="text-gray-900" />
              </div>
            </div>

            <div className=" border-b border-gray-300 my-3">
              <p className=" text-gray-900 w-[85%] md:w-[90%] py-4 font-thin md:font-normal">
                Let&apos;s make dreams come true by building something
                innovative !!!
              </p>
            </div>
            {/* Mobile view Nav */}
            <div className=" space-y-10 flex flex-col">
              <ul className=" space-y-10 ">
                <Link href="/">
                  <li
                    onClick={handleDrawer}
                    className="pt-4 ml-10 text-sm uppercase text-gray-900  border-gray-500"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={handleDrawer}
                    className=" ml-10 text-sm uppercase text-gray-900 border-gray-500"
                  >
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li
                    onClick={handleDrawer}
                    className=" ml-10 text-sm uppercase text-gray-900 border-gray-500"
                  >
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={handleDrawer}
                    className=" ml-10 text-sm uppercase text-gray-900 border-gray-500"
                  >
                    projects
                  </li>
                </Link>
              </ul>
            </div>
            {/* Mobile view socials */}
            <div className=" pt-20">
              <p className=" pb-3 uppercase tracking-widest text-[#5651e5]">
                Let&apos;s connect
              </p>
              <div className="  flex justify-between items-center  sm:w-[80%]">
                <div className=" hover:rounded-full hover:shadow-lg hover:shadow-gray-400 p-3 hover:cursor-pointer hover:scale-105 ease-in duration-500">
                  <BsGithub size="1.5rem" className=" text-gray-900" />
                </div>
                <div className=" hover:rounded-full hover:shadow-lg hover:shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <BsLinkedin size="1.5rem" className=" text-gray-900" />
                </div>
                <div className=" hover:rounded-full hover:shadow-lg hover:shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <BsTwitter size="1.5rem" className=" text-gray-900" />
                </div>
                <div className=" hover:rounded-full hover:shadow-lg hover:shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <BiMailSend size="1.5rem" className=" text-gray-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
