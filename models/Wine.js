// Wine.js

const mongoose = require("mongoose");
const { Schema } = mongoose;

const wineSchema = new Schema({
  catagory: { type: String, require: true },
  grape: { type: String, require: true },
  name: { type: String, require: true },
  producer: { type: String, require: true },
  region: String,
  year: String,
  descriptors: [String],
  acid: String,
  tannin: String,
  alcohol: String,
  color: String,
  pitch: String,
  updated: { type: Date, default: Date.now }
});

mongoose.model("wines", wineSchema);
