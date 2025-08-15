const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  assignedTo: { type: String, required: true },
  comments: [{
    user: String,
    message: String,
    date: { type: Date, default: Date.now }
  }],
  status: { type: String, enum: ['en attente', 'en cours', 'terminé'], default: 'en attente' }
});

module.exports = mongoose.model('Review', reviewSchema);
