import React from "react";
import moviezone from "../public/assets/img/movieZone.png";
import cybercorp from "../public/assets/img/cyberCorp.png";
import arctictravels from "../public/assets/img/Arctic Travels.png";
import moviezonev2 from "../public/assets/img/moviezone-version2.png";
import ProjectItem from "./ProjectItem";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Project = () => {
  return (
    <div id="projects" className=" w-ful">
      <div className=" max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-[#5651e5] text-xl uppercase tracking-widest">
          Projects
        </p>
        <h2 className=" py-4 text-orange-300">What I&apos;ve Built</h2>
        <div className=" grid md:grid-cols-2 gap-8">
          <ProjectItem
            image={moviezone}
            stack="React Js"
            title="MovieZone"
            projectUrl="/moviezone"
          />
          <ProjectItem
            image={cybercorp}
            title="CyberCorp"
            stack="React Js"
            projectUrl="/cyberCorp"
          />
          <ProjectItem
            image={arctictravels}
            title="Arctic Travels"
            stack="React Js"
            projectUrl="/arcticTravels"
          />
          <ProjectItem
            image={moviezonev2}
            title="MovieZone v2"
            stack="Next Js"
            projectUrl="/moviezonev2"
          />
        </div>
        <div className=" flex  justify-center py-12">
          <Link href="/">
            <div className=" rounded-full bg-white  hover:shadow-lg hover:scale-110 p-4 duration-300 ease-in hover:shadow-gray-600 ">
              <HiOutlineChevronDoubleUp
                size={30}
                className="text-[#5651e5] m-auto"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
