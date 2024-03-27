import React from "react";
import Searchbar from "../Searchbar/Searchbar";

import { RiLogoutCircleLine } from "react-icons/ri";
import ConversationList from "../CoversationList/ConversationList";

const Sidebar = () => {
  return (
    <div className="flex flex-col  pl-3 gap-2 w-[50%]">
      <Searchbar />
      <ConversationList />
      <div className="flex gap-4  items-center">
        <RiLogoutCircleLine className=" text-red-600 cursor-pointer" />
        <p className="text-red-700 font-semibold">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
