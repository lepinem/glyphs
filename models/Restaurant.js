// Restaurant.js

const mongoose = require("mongoose");
const { Schema } = mongoose;

const restaurantSchema = new Schema({
  id: Number,
  username: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  phone: String,
  address: {
    street: String,
    city: String,
    state: String,
    postal: String
  },
  password: { type: String, required: true }
});

mongoose.model("restaurants", restaurantSchema);
