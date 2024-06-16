import Bus from "../models/BusModel.js";

export const getBuss = async (req, res) => {
    try {
        const response = await Bus.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getBusById = async (req, res) => {
    try {
        const response = await Bus.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createBus = async (req, res) => {
    try {
        await Bus.create(req.body);
        res.status(201).json({ msg: "Bus Created" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBus = async (req, res) => {
    try {
        await Bus.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Bus Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBus = async (req, res) => {
    try {
        await Bus.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Bus Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}