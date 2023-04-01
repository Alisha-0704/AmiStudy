const mongoose = require('mongoose');

const matchingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  interests: {
    type: [String],
    required: true
  },
  matchedUsers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    required: true
  }
});

const Matching = mongoose.model('Matching', matchingSchema);

module.exports = Matching;
