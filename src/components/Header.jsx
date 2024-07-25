import React from "react";

const Header = () => {
  return (
    <div className=" flex items-center gap-5 px-4 md:px-8  pb-4 ">
      <img
      className=" w-14 h-14 md:w-20 md:h-20 rounded-full"
        src="https://avatars.githubusercontent.com/u/128388399?v=4"
        alt="profile"
      />
      <div className=" text-left">
        <h2 className=" font-semibold text-lg md:text-xl text-white">Alan Derwin A</h2>
        <span className=" text-sm md:text-md text-gray-400">Frontend Developer</span>
      </div>
    </div>
  );
};

export default Header;
