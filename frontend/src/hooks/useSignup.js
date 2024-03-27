import React from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  let api = "http://localhost:8000/api/auth/register";
  const signup = async ({ username, email, password, gender, profilePic }) => {
    try {
      const success = handleError({
        username,
        email,
        password,
        gender,
        profilePic,
      });
      if (!success) {
        return toast.error("somthing is wrong ");
      }
      const data = await axios.post(api, {
        username,
        email,
        password,
        gender,
        profilePic,
      });
      if (!data) {
        toast.error(data.error);
      } else {
        toast.success("success");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return;
};

export const handleError = async ({ username, email, password, gender }) => {
  try {
    if (!username || !email || !password || !gender) {
      return toast.error("Enter all the fields");
    }
    if (password.length >= 6) {
      return toast.error("Password is too short.");
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export default useSignup;
