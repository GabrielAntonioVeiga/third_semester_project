import express from "express";
import usersController from "./controllers/usersController";
const userMiddleware = require("./middlewares/userMiddleware");
const router = express.Router();

router.get("/users", usersController.getAll);

router.post(
  "/user/register",
  userMiddleware.validateRegister,
  usersController.createUser
);

router.post(
  "/user/login",
  userMiddleware.validateLogin,
  usersController.loginUser
);

export default router;
