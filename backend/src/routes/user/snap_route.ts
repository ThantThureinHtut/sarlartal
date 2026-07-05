import express from "express";
import { upload } from "../middleware/upload";
import { apiMiddleware } from "../middleware/apimiddleware";
import * as snapController from "../../controllers/user/snap_controller";
const snapRouter = express.Router();

snapRouter.get("/", snapController.getSnaps);

snapRouter.get("/following", apiMiddleware, snapController.getFollowingSnaps);

snapRouter.get("/saved", apiMiddleware, snapController.getSavedSnaps);

snapRouter.post(
  "/create",
  upload.single("image"), apiMiddleware,
  snapController.createSnap,
);

snapRouter.post("/like", apiMiddleware, snapController.likeSnap);

snapRouter.post("/bookmark", apiMiddleware, snapController.bookmarkSnap);

export default snapRouter;
