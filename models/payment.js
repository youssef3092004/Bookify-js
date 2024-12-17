const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

paymentSchema = mongoose.Schema(
  {
    id: {
      type: String,
      default: uuidv4,
      required: true,
      immutable: true,
    },
    payment_mathond: {
      type: String,
      enum: ["Credit Card", "Debit Card", "PayPal"],
      default: "Credit Card",
    },
    status: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
