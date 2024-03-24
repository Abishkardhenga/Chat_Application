import jwt from "jsonwebtoken";
import UserModel from "../model/UserModel.js";

export const VerifyUser = async (req, res, next) => {
  try {
    const cookie = req.cookies.token;
    if (!cookie) {
      return res
        .status(401)
        .json({ message: "Token is missing", success: false });
    }

    const userVerified = jwt.verify(cookie, process.env.SECRETKEY);
    // console.log("this is userviefied ", userVerified);
    // console.log("this is userviefied id", userVerified.data);
    const user = await UserModel.findById(userVerified.data).select(
      "-password"
    );
    if (!user) {
      res.status(403).json({ message: "user not found ", success: false });
    }
    req.user = user;
    next();
  } catch (error) {
    // Token is either invalid or expired
    res
      .status(401)
      .json({ message: "Token is invalid or expired", success: false });
  }
};
