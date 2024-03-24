import express from "express";
import { VerifyUser } from "../middleware/VerifyUser.js";
import { getUsersForSidebar } from "../Controller/UserController.js";

const routes = express.Router();

routes.get("/", VerifyUser, getUsersForSidebar);

export default routes;
