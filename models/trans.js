import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    _id: {
      type: String,
      required: true
    },
    account_no:{
        type: Number,
        required: true
    },
    account_holder_name:{
        type: String,
        required: true,
    },
    type: {
      type: String,
      enum: ['Expense', 'Income'],
      required: true
    },
    category: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });

const Transaction = mongoose.model('Expense', transactionSchema);
export default Transaction;
