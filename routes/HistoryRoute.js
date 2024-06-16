import express from "express";
import {
    getHistorys, 
    getHistoryById,
    createHistory,
    updateHistory,
    deleteHistory
} from "../controllers/HistoryController.js";

const router = express.Router();

router.get('/historys', getHistorys);
router.get('/history/:id', getHistoryById);
router.post('/history', createHistory);
router.patch('/history/:id', updateHistory);
router.delete('/history/:id', deleteHistory); 

export default router;