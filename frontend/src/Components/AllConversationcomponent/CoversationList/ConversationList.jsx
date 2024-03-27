import React from "react";
import Conversation from "../Conversation/Conversation";

const ConversationList = () => {
  return (
    <div className="flex flex-col gap-2 w-[100%] h-[80%]  overflow-auto">
      <Conversation />
      <Conversation />
      <Conversation />

      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default ConversationList;
