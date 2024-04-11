import { createContext, useContext, useEffect, useState } from "react";
import { UserInfo } from "./useContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const { state, dispatch } = useContext(UserInfo);

  useEffect(() => {
    if (state?.userdata?.user) {
      const newSocket = io("http://localhost:8000", {
        query: {
          userId: state?.userdata?.user?._id,
        },
      });
      setSocket(newSocket);
      newSocket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
        console.log("setuser", users);
        console.log("oneline user", onlineUsers);
      });

      console.log("this is 0", newSocket);
      return () => {
        if (socket) {
          socket.close();
          setSocket(null);
          console.log("this is 1");
        }
      };
    }
  }, [state?.userdata?.user]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
