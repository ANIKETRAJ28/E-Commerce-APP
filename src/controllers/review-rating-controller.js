const ReviewRatingService = require("../services/review-rating-service");

const reviewRatingService = new ReviewRatingService();

const create = async (req, res) => {
    try {
        const response = reviewRatingService.create(req.body);
        return res.status(201).json({
            data: response,
            message: "Successfully created the review or rating",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to created the review or rating",
            success: false,
            err: error
        });
    }
}

module.exports = {
    create
}