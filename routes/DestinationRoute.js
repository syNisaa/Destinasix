import express from "express";
import {
    getDestinations, 
    getDestinationById,
    createDestination,
    updateDestination,
    deleteDestination
} from "../controllers/DestinationController.js"; 

const router = express.Router();

router.get('/destinations', getDestinations);
router.get('/destination/:id', getDestinationById);
router.post('/destination', createDestination);
router.patch('/destination/:id', updateDestination);
router.delete('/destination/:id', deleteDestination); 

export default router;