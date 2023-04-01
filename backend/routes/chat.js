const express = require("express");
const router = express.Router();
const Message = require("../models/message");

// Get all messages between two users
router.get("/:senderId/:receiverId", async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.params.senderId, receiver: req.params.receiverId },
        { sender: req.params.receiverId, receiver: req.params.senderId },
      ],
    }).populate("sender receiver", "name");
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Save a new message
router.post("/", async (req, res) => {
  try {
    const message = new Message({
      sender: req.body.senderId,
      receiver: req.body.receiverId,
      message: req.body.message,
    });
    const savedMessage = await message.save();
    res.json(savedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
