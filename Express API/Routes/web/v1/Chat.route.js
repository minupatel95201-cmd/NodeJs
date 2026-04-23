const express = require("express");
const router = express.Router();
const userMiddlewre = require("../../../Middlewares/user.middleware");
const chatController = require("../../../Controllers/chat.controller");

// router--> service --> controller --> call into router
router.post("/chat", userMiddlewre.authUser, chatController.botReply);


module.exports = router;