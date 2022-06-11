import React from "react";
import SkillsPng from "./SkillsItem";
import mongo from "../public/assets/img/mongo.png";
import react from "../public/assets/img/react.png";
import tailwind from "../public/assets/img/tailwind.png";
import github from "../public/assets/img/github1.png";
import mysql from "../public/assets/img/mysql.png";
import nextjs from "../public/assets/img/next.png";
import css from "../public/assets/img/css.png";
import html from "../public/assets/img/html.png";
import grapql from "../public/assets/img/graphql.png";
import apollo from "../public/assets/img/apollo.png";
import node from "../public/assets/img/node.png";
import javascript from "../public/assets/img/javascript.png";

const Skills = () => {
  return (
    <div id="skills" className=" w-full lg:h-screen p-2 py-16">
      <div className=" max-w-[1240px] mx-auto flex flex-col justify center h-ful">
        <p className="text-[#5651e5] text-xl uppercase tracking-widest">
          Skills
        </p>
        <h2 className=" py-4 text-orange-300">What I Can Do</h2>
        <div className="grid md:grid-cols-2 py-4 lg:grid-cols-4 gap-8">
          <SkillsPng imageUrl={react} title="Reactjs" />
          <SkillsPng imageUrl={tailwind} title="Tailwind Css" />
          <SkillsPng imageUrl={css} title="Css" />
          <SkillsPng imageUrl={mongo} title="MongoDB" />
          <SkillsPng imageUrl={html} title="Html" />
          <SkillsPng imageUrl={nextjs} title="Nextjs" />
          <SkillsPng imageUrl={grapql} title="Graphql" />
          <SkillsPng imageUrl={node} title="Nodejs" />
          <SkillsPng imageUrl={mysql} title="Mysql" />
          <SkillsPng imageUrl={javascript} title="Javascript" />
          <SkillsPng imageUrl={apollo} title="Apollo" />
          <SkillsPng imageUrl={github} title="Github" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
