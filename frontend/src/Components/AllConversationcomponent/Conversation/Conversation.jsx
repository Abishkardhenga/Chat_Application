import React from "react";

const Conversation = ({ item }) => {
  console.log("this is conversation item", item);
  console.log("this is conversation item", item.profilePic);
  return (
    <div className="flex p-4  cursor-pointer hover:bg-blue-900 gap-2">
      <img
        class="w-8 h-8 rounded-full"
        src={item.profilePic}
        alt="Jese image"
      />
      <p>{item.username}</p>
    </div>
  );
};

export default Conversation;
