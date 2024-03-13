import jwt from "jsonwebtoken";

export const VerifyUser = (req, res, next) => {
  try {
    const cookie = req.cookies.token;
    console.log("this is token", cookie);
    if (!cookie) {
      return res
        .status(401)
        .json({ message: "Token is missing", success: false });
    }

    const userVerified = jwt.verify(cookie, process.env.SECRETKEY);
    req.userVerified = userVerified;
    console.log("this is userverified", userVerified);
    next();
  } catch (error) {
    // Token is either invalid or expired
    res
      .status(401)
      .json({ message: "Token is invalid or expired", success: false });
  }
};
