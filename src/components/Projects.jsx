import React, { useState } from "react";
import { projects } from "../components/data/data";
import { VscLinkExternal } from "react-icons/vsc";
import { motion } from "framer-motion";

const ITEMS_PER_PAGE = 4;

const Projects = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="px-4 md:px-8">
      <h1 className="font-semibold text-xl text-left text-white mb-4">
        Side Projects
      </h1>

      <div className="space-y-4">
        {currentProjects.map((project, index) => (
          <motion.a
            key={project.heading}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            className="block"
          >
            <div className="flex flex-col gap-3 p-4 text-left bg-slate-900 rounded-lg hover:bg-slate-800 transition">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-lg md:text-xl text-white">
                  {project.heading}
                </h2>
                <VscLinkExternal className="text-gray-400" />
              </div>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed text-gray-400">
                {project.introduction}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-950 text-blue-400 text-xs py-1 px-2 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 text-sm bg-slate-800 text-white rounded disabled:opacity-40"
        >
          Prev
        </button>

        <span className="text-gray-400 text-sm">
          {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 text-sm bg-slate-800 text-white rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;