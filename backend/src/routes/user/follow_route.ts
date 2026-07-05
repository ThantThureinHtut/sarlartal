import express from "express";
import { apiMiddleware } from "../middleware/apimiddleware";
import * as followController from "../../controllers/user/follow_controller";
const followRouter = express.Router();

followRouter.post("/toggle", apiMiddleware, followController.toggleFollow);

export default followRouter;
