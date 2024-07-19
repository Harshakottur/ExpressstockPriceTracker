const mongoose = require('mongoose');

const cryptoDataSchema = new mongoose.Schema({
  code: String,
  rate: Number,
  volume: Number,
  cap: Number,
  delta: {
    hour: Number,
    day: Number,
    week: Number,
    month: Number,
    quarter: Number,
    year: Number
  },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CryptoData', cryptoDataSchema);
