const validateCategory = (req, res, next) => {
    if(!req.body.categoryName) return res.status(400).json({
        data: {},
        message: "Missing mandatory items for creation of the category",
        success: false,
        err: {error: "Missing category name"}
    });
    next();
}

module.exports = {
    validateCategory
};