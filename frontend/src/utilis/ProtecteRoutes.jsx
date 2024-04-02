import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "./useContext";
import { Outlet, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import toast from "react-hot-toast";

const ProtectedRoutes = () => {
  const { state, dispatch } = useContext(UserInfo);
  const [cookies] = useCookies();
  const [loading, setLoading] = useState(false);
  const userverifyapi = "http://localhost:8000/api/users/verify-user";

  useEffect(() => {
    const fetchData = async () => {
      console.log("this is coolkies", cookies);
      try {
        if (!cookies.token) {
          console.log("no cookie is available");
          return;
        }

        const response = await axios.post(
          userverifyapi,
          {},
          {
            withCredentials: true,
          }
        );
        console.log("this is response", response);

        if (response.status === 200) {
          dispatch({ type: "setUserdata", payload: response.data });
        } else {
          console.log("Error verifying user. Status:", response.status);
        }
      } catch (error) {
        console.log("Error verifying user:", error.message);
      } finally {
        setLoading(true);
      }
    };

    fetchData();
  }, [cookies, cookies.token]);

  if (!loading) {
    return <div>Loading...</div>;
  }

  if (state?.userdata) {
    return <Outlet />;
  } else {
    toast.error("You are not authorized . Please Login !");
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
