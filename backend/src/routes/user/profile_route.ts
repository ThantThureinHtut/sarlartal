import express from "express";
import { avatarUpload } from "../middleware/upload";
import * as profileController from "../../controllers/user/profile_controller";
const profileRouter = express.Router();

// avatarUpload is middleware to handle the file upload for the avatar image
profileRouter.post(
  "/avatar/create",
  avatarUpload.single("image"),
  profileController.updateAvatar,
);

profileRouter.post("/name/update", profileController.updateName);

profileRouter.post("/bio/update", profileController.updateBio);

profileRouter.post("/status/update", profileController.updateStatus);

profileRouter.post("/email/update", profileController.updateEmail);

export default profileRouter;
