import express from "express";
import AuthRoutes from "./Route/AuthRoute.js";
import dotenv from "dotenv";
import { DbConnector } from "./utilis/db.js";
import cookieParser from "cookie-parser";
import { VerifyUser } from "./middleware/VerifyUser.js";

const app = express();

dotenv.config();
const port = process.env.PORT || 8000;
app.use(cookieParser());
app.use(express.json());
app.use("/hello", VerifyUser, (req, res) => {
  res.send("hello dost");
});
app.use("/api/auth", AuthRoutes);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
  DbConnector();
});
