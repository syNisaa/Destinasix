import Flight from "../models/FlightModel.js";

export const getFlights = async (req, res) => {
    try {
        const response = await Flight.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
} 

export const getFlightById = async (req, res) => {
    try {
        const response = await Flight.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createFlight = async (req, res) => {
    try {
        await Flight.create(req.body);
        res.status(201).json({ msg: "Flight Created" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateFlight = async (req, res) => {
    try {
        await Flight.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Flight Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteFlight = async (req, res) => {
    try {
        await Flight.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Flight Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}