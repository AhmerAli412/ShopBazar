const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    Desc: { type: String, required: true, },
    img: { type: String, required: true },
    title: {type: String, required:true},
    category: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    price1: { type: Number, required: true },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);