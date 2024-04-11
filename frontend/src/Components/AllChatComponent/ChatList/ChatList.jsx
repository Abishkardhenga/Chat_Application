import React from "react";
import Chat from "../Chat/Chat";
import { useGetMessage } from "../../../hooks/useGetMessage";

const ChatList = () => {
  const { loading, message } = useGetMessage();
  return (
    <div className="flex flex-col bg-blue-950  gap-3 min-h-[477px] overflow-auto">
      {message?.map((item) => {
        return <Chat item={item} />;
      })}
    </div>
  );
};

export default ChatList;
