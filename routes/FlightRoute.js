import express from "express";
import {
    getFlights, 
    getFlightById,
    createFlight,
    updateFlight,
    deleteFlight
} from "../controllers/FlightController.js";

const router = express.Router();

router.get('/flights', getFlights);
router.get('/flight/:id', getFlightById);
router.post('/flight', createFlight);
router.patch('/flight/:id', updateFlight);
router.delete('/flight/:id', deleteFlight); 

export default router;