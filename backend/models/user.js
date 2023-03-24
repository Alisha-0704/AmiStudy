const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Middleware to hash the password before saving to the database
userSchema.pre('save', async function(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

// Method to check if the entered password matches the hashed password in the database
userSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const match = await bcrypt.compare(password, user.password);
  return match;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
