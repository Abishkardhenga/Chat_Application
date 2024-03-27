import React from "react";
import Chat from "../Chat/Chat";

const ChatList = () => {
  return (
    <div className="flex flex-col gap-3 overflow-auto">
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </div>
  );
};

export default ChatList;
