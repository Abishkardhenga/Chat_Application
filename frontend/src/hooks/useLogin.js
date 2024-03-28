import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const useLogin = () => {
  let api = "http://localhost:8000/api/auth/login";
  const login = async ({ email, password }) => {
    try {
      const data = await axios.post(api, {
        email,
        password,
      });
      console.log("this is data", data);
      if (!data) {
        toast.error("some error ");
      } else {
        toast.success("successfully login +++");
        return data;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("this is error ", error);
    }
  };
  return { login };
};

export default useLogin;
