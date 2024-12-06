import express from "express";
const userRouter = express.Router();
// Import User model
import userModel from "../models/userModel.js";
import {
  loginUser,
  registerUser,
  getProfile,
  updateProfile,
} from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";
import upload from "./../middlewares/multer.js";

userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);

userRouter.get("/get-profile", authUser, getProfile);
userRouter.post(
  "/update-profile",
  upload.single("image"),
  authUser,
  updateProfile
);

export default userRouter;
