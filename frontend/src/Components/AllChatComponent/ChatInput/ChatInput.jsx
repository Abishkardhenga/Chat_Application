import React from "react";
import { IoSend } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";
import { BsFillEmojiSmileFill } from "react-icons/bs";

const ChatInput = () => {
  return (
    <div class="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
      <button
        type="button"
        class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
      >
        <LuImagePlus />
      </button>
      <button
        type="button"
        class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
      >
        <BsFillEmojiSmileFill />
      </button>
      <input type="text" className="w-[80%]" placeholder="enter the message" />
      <button
        type="submit"
        class="inline-flex ml-4 justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
      >
        <IoSend />
      </button>
    </div>
  );
};

export default ChatInput;
