const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  laptop: { type: mongoose.Schema.Types.ObjectId, ref: 'Laptop', required: true },
  entrytime: { type: Date, default: Date.now },
  checkout: { type: Date },
  type: { type: Number, default: 1 }
});

module.exports = mongoose.model('Entry', entrySchema);
