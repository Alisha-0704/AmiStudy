const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  eventName: {
    type: String,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Events = mongoose.model('Events', eventsSchema);

module.exports = Events;
