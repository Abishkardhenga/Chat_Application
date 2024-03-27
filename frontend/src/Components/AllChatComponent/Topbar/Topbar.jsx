import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";

const Topbar = () => {
  return (
    <div className="w-[100%] flex bg-[red] p-4 py-6  h-[40px] items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className="h-[40px] w-[40px]">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg"
            alt="profile_img"
            className="w-[100%] h-[100%] rounded-full object-cover"
          />
        </div>
        <p>Aabiskar dhenga</p>
      </div>
      <div className="flex gap-4">
        <IoCallSharp className="cursor-pointer" />
        <IoVideocam className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Topbar;
