import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ image, title, stack, projectUrl }) => {
  return (
    <div
      className=" relative flex items-center justify-center h-auto rounded-xl p-4  w-full shadow-lg hover:shadow-gray-600
          hover:scale-105 duration-300 ease-in group"
    >
      <Image
        className=" rounded-xl group-hover:opacity-10"
        src={image}
        alt="/"
      />
      <div className="hidden group-hover:block absolute ">
        <h3 className=" text-2xl tracking-wider text-center">{title}</h3>
        <p className="text-center pb-4 pt-2 ">{stack}</p>
        <Link href={projectUrl}>
          <p className=" text-center bg-gradient-to-r from-[#5651e5] to-orange-300 rounded-lg font-bold py-3 cursor-pointer text-lg">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
