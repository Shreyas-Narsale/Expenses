import Transaction from "../models/trans.js";
import mongoose from "mongoose";

//Retrieve financial transactions for a user.
export const getUser =async(req, res)=>{
    try{
        const num = req.params.no;
        const transactions = await Transaction.find({ account_no: num });
        res.status(200).json(transactions);
    }
    catch(err){
        res.status(404).json({message : err.message});
    }
}

// Add new financial transactions for a user
export const AddTrans =async(req, res)=>{
    try{
        const transactionData = req.body;
        transactionData._id=new mongoose.Types.ObjectId();
        if (!transactionData.account_no || !transactionData.account_holder_name || !transactionData.type || !transactionData.category || !transactionData.amount || !transactionData.date) {
          return res.status(400).send('Missing required transaction data');
        }
        
        const newTransaction = new Transaction(transactionData);
        await newTransaction.save();
        res.status(200).json(newTransaction);

        }
    catch(err){
        res.status(404).json({message : err.message});
        }
}

// Retrieve details of a specific transaction
export const GetTrans =async(req, res)=>{
    try{
        const  { id } =req.params;
        const transaction =await Transaction.findById(id);
        
        res.status(200).json(transaction);
        }
    catch(err){
        res.status(404).json({message : err.message});
    }
}

// Update details of a specific transaction
export const UpdateTrans =async(req, res)=>{
    try{
        const transactionId = req.params.id;
        
        const updatedTransactionData = req.body;
        const transaction = await Transaction.findById(transactionId);
        if (!transaction) {
        return res.status(404).send('Transaction not found');
        }

        transaction.account_no = updatedTransactionData.account_no || transaction.account_no;
        transaction.account_holder_name = updatedTransactionData.account_holder_name || transaction.account_holder_name;
        transaction.type = updatedTransactionData.type || transaction.type;
        transaction.category = updatedTransactionData.category || transaction.category;
        transaction.amount = updatedTransactionData.amount || transaction.amount;
        transaction.date = updatedTransactionData.date || transaction.date;
        transaction.description = updatedTransactionData.description || transaction.description;

        transaction.updatedAt = Date.now();
        await transaction.save();
        res.status(200).json(transaction);
    }
    catch(err){
        res.status(404).json({message : err.message});
    }
}

// Delete a specific transaction
export const DeleteTrans =async(req, res)=>{
    try{
          const   transactionId  =req.params.id;
          const transaction = await Transaction.findByIdAndDelete(transactionId);
          if (!transaction) {
              return res.status(404).send('Transaction not found');
          }
          
          
          res.sendStatus(204);
      }
      catch(err){
          res.status(404).json({message : err.message});
      }
  }