import React from "react";
import { BsDownload } from "react-icons/bs";
import pdf from "../assets/cv.pdf";


const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className=" px-4 md:px-8 text-left "

    >
      <h2 className=" font-semibold text-lg md:text-xl text-white">About</h2>
      <p className=" text-sm md:text-md text-justify leading-relaxed text-gray-400 mt-2 ">
        I'm a dedicated and enthusiastic front-end developer eager to embark on
        my professional journey in web development. As a recent graduate, I have
        developed a strong foundation in HTML, CSS, and JavaScript, along with
        experience in modern frameworks like React.js and Next.js.
        <br /><br/>I am passionate about creating responsive and user-friendly
        interfaces and am committed to continuous learning and growth in the
        field. I'm excited to contribute to innovative and impactful web
        projects. Let's build something amazing together!
      </p>
      <button
        className={`flex items-center  gap-2 bg-blue-500 hover:bg-blue-600 text-sm font-medium px-4 py-2 md:py-3 text-white rounded-sm my-4`}
        onClick={handleDownload}
      >
        Download CV <BsDownload className="text-lg font-medium" />
      </button>
    </div>
  );
};

export default About;
