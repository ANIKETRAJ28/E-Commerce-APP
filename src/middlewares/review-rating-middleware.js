const validateReviewRating = (req, res, next) => {
    if(!req.body.review && !req.body.rating) throw {
        message: "Missing ratings or review"
    }
    next();
}

module.exports = {
    validateReviewRating
}