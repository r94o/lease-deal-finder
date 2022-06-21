const mongoose = require("mongoose");

const PriceSchema = new mongoose.Schema({ price: Number }, { timestamps: true });

const CarSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    required: true
  },
  notificationThreshold: {
    type: Number,
  },
  lowestPrice: {
    type: Number,
    required: true
  }
});


const Car = mongoose.model("Car", CarSchema);
module.exports = Car;