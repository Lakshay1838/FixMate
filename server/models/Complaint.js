const mongoose = require("mongoose");

const ComplainSchema = new mongoose.Schema({
  id: { 
    type: String,
    required: true 
  },
  name: { 
    type: String,
    required: true 
  },
  phone: { 
    type: String,
    required: true 
  },
  address: { 
    type: String,
    required: true 
  },
  description: { 
    type: String,
    required: true 
  },
  serviceCharges: {
    type: Number,
  },
  taxAmount: {
    type: Number,
  },
  totalAmount: {
    type: Number,
  },
  taxRate: {
    type: Number,
  },
  vendorName: {
    type: String,
  },
  serviceType: {
    type: String,
  },
  photo: { 
    type: String 
  },
  fieldType: { 
    type: String,
    required: true 
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected","reviewed"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Complaint", ComplainSchema);
