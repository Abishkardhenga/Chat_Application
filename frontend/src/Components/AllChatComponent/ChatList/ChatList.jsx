import React, { useEffect } from "react";
import Chat from "../Chat/Chat";
import { useGetMessage } from "../../../hooks/useGetMessage";

const ChatList = () => {
  const { loading, message } = useGetMessage();
  
  return (
    <div className="flex flex-col bg-blue-950  gap-3 min-h-[624px] overflow-auto">
      {message?.map((  item, key) => {
        return <Chat key= { key} item={item} />;
      })}
    </div>
  );
};

export default ChatList;
