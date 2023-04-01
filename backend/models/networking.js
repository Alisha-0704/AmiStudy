const mongoose = require('mongoose');

const networkingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  interests: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Networking = mongoose.model('Networking', networkingSchema);

module.exports = Networking;
