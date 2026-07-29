import express from "express";
import * as messengerController from "../../controllers/user/messenger_controller";

const messengerRouter = express.Router();

messengerRouter.get(
  "/getFetchConversation",
  messengerController.getFetchConversation,
);
messengerRouter.post(
  "/sendMessageRequest",
  messengerController.sendMessage,
);

export default messengerRouter;
