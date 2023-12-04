import express from "express";
import { 
    getUser,
    AddTrans,
    GetTrans,
    UpdateTrans,
    DeleteTrans
 } from "../controllers/trans_api.js";


const router =express.Router();

/*  routes*/

router.get("/getUser/:no",getUser);
router.post("/addTrans",AddTrans);
router.get("/:id",GetTrans);
router.put("/updateTrans/:id",UpdateTrans);
router.delete("/deleteTrans/:id",DeleteTrans);

export default router;