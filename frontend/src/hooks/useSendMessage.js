import { useState } from "react";
import { useConversation } from "../zustand/useConversation";
import axios from "axios";

export const useSendMessage = () => {
  // Destructure needed values from the conversation context
  const { message, selectedConversation, setMessage } = useConversation();
  const [loading, setLoading] = useState(false);

  const sendMessage = async (inputmessage) => {
    try {
      setLoading(true);
      // Send message to the server
      const data = await axios.post(
        `http://localhost:8000/api/send-message/${selectedConversation._id}`,
        {
          message: inputmessage,
        },
        {
          withCredentials: true,
        }
      );
      // Check if message is successfully sent
      if (data.status !== 201) {
        throw new Error("Data nai xaina ");
      } else {
        console.log("this is data message", data);
        setMessage([...message, data.data]);
        console.log("this is message", message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
};
