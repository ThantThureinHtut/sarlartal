/// <reference path="../types/express.d.ts" />
import express from "express";
import snapRouter from "./user/snap_route";
import profileRouter from "./user/profile_route";
import followRouter from "./user/follow_route";
import { apiMiddleware } from "./middleware/apimiddleware";
import * as userController from "../controllers/user/user_controller";
const apiRouter = express.Router();

apiRouter.use("/user/profile", apiMiddleware ,profileRouter);
apiRouter.use("/snaps", snapRouter);
apiRouter.use("/follow", followRouter);
apiRouter.get("/get-user", apiMiddleware, userController.getUser);
apiRouter.get("/user/:userId", apiMiddleware, userController.getPublicProfile);

export default apiRouter;
