import React from "react";
import { educationData } from "../components/data/data";

const Education = () => {
  return (
    <div className="px-4 md:px-8 py-6">
      <h1 className="font-semibold text-xl text-left text-white mb-4">
        Education
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {educationData.map((education, index) => (
          <div
            key={index}
            className="p-4  bg-slate-900 opacity-3 rounded-lg text-sm md:text-md text-justify leading-relaxed text-gray-400"
          >
            <h2 className="text-lg font-semibold text-white mb-2">
              {education.degree}
            </h2>
            <p className="italic mb-1">{education.college}</p>
            <p>{education.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
