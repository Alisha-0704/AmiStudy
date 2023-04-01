const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

// Route for creating a new user
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});


// Route to handle user login
router.post('/login', async (req, res, next) => {
    const { studentId, password } = req.body;
    try {
      // Find the user by email
      const user = await User.findOne({ studentId });
      if (!user) {
        return res.status(401).json({ message: 'Invalid studentid or password' });
      }
      // Validate the user's password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid student ID or password' });
      }
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

// Route for getting a user's profile
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Route for updating a user's profile
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const updates = Object.keys(req.body);
  const allowedUpdates = ['email', 'password'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    updates.forEach((update) => user[update] = req.body[update]);
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Route for deleting a user's profile
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;