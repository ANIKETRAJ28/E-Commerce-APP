const ReviewRatingRepository = require("../repository/review-rating-repository");

const reviewRatingRepository = new ReviewRatingRepository();

class ReviewRatingService {

    async create(data) {
        try {
            const response = await reviewRatingRepository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = ReviewRatingService;