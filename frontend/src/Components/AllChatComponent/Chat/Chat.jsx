import React, { useContext, useState } from "react";
import { UserInfo } from "../../../utilis/useContext";
import { useConversation } from "../../../zustand/useConversation";

const Chat = ({ item }) => {
  const { state, dispatch } = useContext(UserInfo);
  const { selectedConversation } = useConversation();
  const myChat = state.userdata.user._id == item?.senderId;
  const styles = myChat ? "  flex-row-reverse" : " ";
  const bgstyles = myChat ? "bg-[rgb(9,100,157)]" : " bg-white";
  const textColor = myChat ? "text-white" : "text-black";
  console.log("this is selecteConversation", selectedConversation);
  console.log("this is item", item);
  return (
    <div class={`  flex p-4 ${styles}  items-start gap-2.5`}>
      <img
        class="w-8 h-8 rounded-full"
        src="https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg"
        alt="Jese image"
      />
      <div
        className={`flex flex-col w-full max-w-[60%] ${bgstyles}  leading-1.5 p-4 border-gray-200  rounded-[1rem] dark:bg-gray-700`}
      >
        <div class="flex items-center space-x-2 rtl:space-x-reverse"></div>
        <p class={`text-sm font-normal py-2.5 ${textColor} `}>
          {item?.messages}
        </p>
        <div className="flex gap-[4rem]">
          <span class="text-sm font-normal text-black-500 dark:text-gray-400">
            Delivered
          </span>
          <span class="text-sm font-normal text-black-500 dark:text-gray-400">
            11:00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
