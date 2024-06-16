import History from "../models/HistoryModel.js";

export const getHistorys = async (req, res) => {
    try {
        const response = await History.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getHistoryById = async (req, res) => {
    try {
        const response = await History.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createHistory = async (req, res) => {
    try {
        await History.create(req.body);
        res.status(201).json({ msg: "History Created" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateHistory = async (req, res) => {
    try {
        await History.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "History Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteHistory = async (req, res) => {
    try {
        await History.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "History Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}