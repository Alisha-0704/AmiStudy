const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
// Hash password before saving to database
userSchema.pre('save', async function(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  next();
});

// Compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  const user = this;
  return bcrypt.compare(candidatePassword, user.password);
};
const User = mongoose.model("User", userSchema);

module.exports = User;
