import jwt from "jsonwebtoken";
export const setTokenAndCookie = async (data, res) => {
  try {
    const token = jwt.sign({ data }, process.env.SECRETKEY, {
      expiresIn: "1h",
    });
    if (!token) {
      console.log("failed to create the token");
    } else {
      res.cookie("TOKEN", token, {
        maxAge: 900000,
        httpOnly: true,
        secure: true,
      });
    }
  } catch (error) {
    console.log("this is error", error);
  }
};
