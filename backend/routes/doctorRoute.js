import express from "express";
import { doctorList } from "../controllers/doctorController.js";

const doctorRouter = express.Router();

// Add your routes here
doctorRouter.get("/list", doctorList);

export default doctorRouter;