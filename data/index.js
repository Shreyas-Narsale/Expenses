import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const trans = [
  {
    _id: userIds[0],
    account_no: 1,
    account_holder_name: "Shreyas",
    type: "Expense",
    category: "Saving",
    amount: 10000,
    date: "2023-12-02",
    description: "Mall",
    createdAt: "2023-12-02",
    updatedAt: "2023-12-03",
  },
  {
    _id: userIds[1],
    account_no: 2,
    account_holder_name: "Nishant",
    type: "Income",
    category: "Current",
    amount: 20000,
    date: "2023-12-01",
    description: "Salary",
    createdAt: "2023-12-01",
    updatedAt: "2023-12-02",
  },
  {
    _id: userIds[2],
    account_no: 2,
    account_holder_name: "Nishant",
    type: "Income",
    category: "Current",
    amount: 2000,
    date: "2023-12-03",
    description: "Bonus",
    createdAt: "2023-12-03",
    updatedAt: "2023-12-03",
  },
];
