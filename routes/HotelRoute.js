import express from "express";
import {
    getHotels, 
    getHotelById,
    createHotel,
    updateHotel,
    deleteHotel
} from "../controllers/HotelController.js";

const router = express.Router();

router.get('/hotels', getHotels);
router.get('/hotels/:id', getHotelById);
router.post('/hotels', createHotel);
router.patch('/hotels/:id', updateHotel);
router.delete('/hotels/:id', deleteHotel); 

export default router;