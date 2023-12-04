import express from 'express';
import mongoose from "mongoose";
import Transaction from './models/trans.js';
import {trans } from "./data/index.js";
import bodyParser from "body-parser";
import transactionsRoutes from "./routes/routes.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/transactions",transactionsRoutes);

const MONGO_URL='mongodb+srv://shrinarsale2610:Shreyas1234@trans.bs3lrr3.mongodb.net/?retryWrites=true&w=majority'
const PORT=3001 || 6001; /* port from env 3001 if 3001 doesnot work then 6001 backup port*/
mongoose.connect(MONGO_URL ,
    ).then(()=>{
        app.listen(PORT, ()=> console.log(`Server Port: ${PORT}`));
        /*Add data one time */
        //Transaction.insertMany(trans);
    })
    .catch((error) => console.log(`${error} did not connect `));


    