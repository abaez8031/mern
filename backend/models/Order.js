const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  sandwiches: [{
    type: Schema.Types.ObjectId,
    ref: "Sandwich"
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("Order", orderSchema);