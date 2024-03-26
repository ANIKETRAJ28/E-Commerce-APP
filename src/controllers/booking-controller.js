const BookingService = require("../services/booking-service");

const bookingService = new BookingService();

const create = async (req, res) => {
    try {
        const response = await bookingService.create(req.body);
        return res.status(201).json({
            data: response,
            message: "Successfully created the booking",
            status: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to create the booking",
            status: true,
            err: error
        });
    }
}

module.exports = {
    create
}