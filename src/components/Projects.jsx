import React from "react";
import{ projects} from "../components/data/data";
import { VscLinkExternal } from "react-icons/vsc";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className=" px-4 md:px-8">
      <h1 className=" font-semibold text-xl text-left text-white mb-4">Side Projects</h1>
      {projects.map((project, index) => (
        <motion.a
          className=" text-sm text-justify leading-relaxed text-gray-400  "
          href={project.url}
          key={index}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 100 }}
          transition={{ duration: 2, delay: index * 0.1 }}
        >
          <div
            className=" flex flex-col my-2 gap-2 p-4 text-left bg-slate-900 opacity-3 rounded-lg hover:opacity-100"
            key={project.heading}
          >
            <div className=" flex items-center justify-between text-lg text-blue-500">
              <h2 className=" font-semibold text-lg md:text-xl text-white">
                {project.heading}
              </h2>
              <VscLinkExternal/>
            </div>

            <p className=" text-sm md:text-md text-justify md:text-balance leading-relaxed text-gray-400 mt-2 ">
              {project.introduction}
            </p>
            <p className=" flex flex-wrap text-sm md:text-md gap-2 text-justify leading-relaxed text-gray-400 mt-2 ">
              {project.technologies.map((technology) => (
                <p
                  className=" bg-slate-950  text-blue-500 py-1 px-2 rounded-md"
                  key={technology}
                >
                  {technology}
                </p>
              ))}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default Projects;
