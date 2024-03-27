import React from "react";
import ChatInput from "../../Components/AllChatComponent/ChatInput/ChatInput";
import Sidebar from "../../Components/AllConversationcomponent/Sidebar/Sidebar";
import Topbar from "../../Components/AllChatComponent/Topbar/Topbar";
import ChatList from "../../Components/AllChatComponent/ChatList/ChatList";

const Home = () => {
  return (
    <div className="flex  bg-[hsl(0,69%,11%)] justify-center items-center h-screen w-screen">
      <div className="flex h-[90%] bg-white w-[60%]">
        <Sidebar />
        <div className="flex flex-col w-[50%]">
          <Topbar />
          <ChatList />
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default Home;
