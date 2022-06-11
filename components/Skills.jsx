import Image from "next/image";
import React from "react";
import SkillsPng from "./SkillsItem";

const Skills = () => {
  return (
    <div id="skills" className=" w-full lg:h-screen p-2 py-16">
      <div className=" max-w-[1240px] mx-auto flex flex-col justify center h-ful">
        <p className="text-[#5651e5] text-xl uppercase tracking-widest">
          Skills
        </p>
        <h2 className=" py-4 text-orange-300">What I Can Do</h2>
        <div className="grid md:grid-cols-2 py-4 lg:grid-cols-4 gap-8">
          <SkillsPng
            imageUrl="/../public/assets/img/react.png"
            title="Reactjs"
          />
          <SkillsPng
            imageUrl="/../public/assets/img/tailwind.png"
            title="Tailwind Css"
          />
          <SkillsPng imageUrl="/../public/assets/img/css.png" title="Css" />
          <SkillsPng
            imageUrl="/../public/assets/img/mongo.png"
            title="MongoDB"
          />
          <SkillsPng imageUrl="/../public/assets/img/html.png" title="Html" />
          <SkillsPng imageUrl="/../public/assets/img/next.png" title="Nextjs" />
          <SkillsPng
            imageUrl="/../public/assets/img/graphql.png"
            title="Graphql"
          />
          <SkillsPng imageUrl="/../public/assets/img/node.png" title="Nodejs" />
          <SkillsPng imageUrl="/../public/assets/img/mysql.png" title="Mysql" />
          <SkillsPng
            imageUrl="/../public/assets/img/javascript.png"
            title="Javascript"
          />
          <SkillsPng
            imageUrl="/../public/assets/img/apollo.png"
            title="Apollo"
          />
          <SkillsPng
            imageUrl="/../public/assets/img/github1.png"
            title="Github"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
