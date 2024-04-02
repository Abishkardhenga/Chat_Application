import React, { useEffect } from "react";
import Conversation from "../Conversation/Conversation";
import useGetConversation from "../../../hooks/useGetConversation";

const ConversationList = () => {
  const { error, data } = useGetConversation();

  return (
    <div className="flex flex-col gap-2 w-[100%] h-[80%]  overflow-auto">
      {data.message?.map((item) => {
        return <Conversation item={item} />;
      })}
    </div>
  );
};

export default ConversationList;
