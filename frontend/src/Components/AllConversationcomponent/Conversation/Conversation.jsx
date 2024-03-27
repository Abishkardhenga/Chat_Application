import React from "react";

const Conversation = () => {
  return (
    <div className="flex p-4  cursor-pointer hover:bg-blue-900 gap-2">
      <div className="h-[40px] w-[40px]">
        <img
          src="https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg"
          alt="profile_img"
          className="w-[100%] h-[100%] rounded-full object-cover"
        />
      </div>
      <p>Aabiskar dhenga</p>
    </div>
  );
};

export default Conversation;
