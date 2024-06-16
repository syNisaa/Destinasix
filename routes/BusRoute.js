import express from "express";
import {
    getBuss, 
    getBusById,
    createBus,
    updateBus,
    deleteBus
} from "../controllers/BusController.js";

const router = express.Router();

router.get('/buss', getBuss);
router.get('/bus/:id', getBusById);
router.post('/bus', createBus);
router.patch('/bus/:id', updateBus);
router.delete('/bus/:id', deleteBus); 

export default router;