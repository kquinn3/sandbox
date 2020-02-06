const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const CoinSchema = new Schema({
  denomination: {
    type: String,
    required: true
  },
  mint: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("CoinModel", CoinSchema);
