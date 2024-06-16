import Destination from "../models/DestinationModel.js";

export const getDestinations = async(req, res) =>{
    try {
        const response = await Destination.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDestinationById = async(req, res) =>{
    try {
        const response = await Destination.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createDestination = async(req, res) =>{
    try {
        await Destination.create(req.body);
        res.status(201).json({msg: "Destination Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateDestination = async(req, res) =>{
    try {
        await Destination.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Destination Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteDestination = async(req, res) =>{
    try {
        await Destination.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Destination Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}