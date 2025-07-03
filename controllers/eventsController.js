import { Events } from "../models/eventSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js"

export const createEvents = async (req, res, next) => {
    console.log(req.body)
    const { event } = req.body

    try {
        if (!event) {
            handleValidationError("Please Fill Full Form", 400)
        }
        await Events.create({ event })
        res.status(200).json({
            success: true,
            message: "Events created!"
        })
    } catch (err) {
        next(err)
    }
}

export const getAllEvents = async (req, res, next) => {
    try {
        const events = await Events.find()
        res.status(200).json({
            success: true,
            events
        })
    } catch (err) {
        next(err)
    }
}