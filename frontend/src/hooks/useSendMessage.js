import { useState } from "react";
import { useConversation } from "../zustand/useConversation";
import axios from "axios";

export const useSendMessage = () => {
  const { message, selectedConversation, setMessage } = useConversation();
  const [loading, setLoading] = useState(false); 

  const sendMessage = async (inputmessage) => {
    try {
      setLoading(true);
      const data = await axios.post(
        `http://localhost:8000/api/send-message/${selectedConversation._id}`,
        {
          message: inputmessage,
        },
        {
          withCredentials: true,
        }
      );
      if (data.status !== 201) {
        throw new Error("Data nai xaina ");
      } else {
        console.log("this is data message", data);
        setMessage([...message, data.data.messages]);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
};
