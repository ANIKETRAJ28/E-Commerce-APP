const validateCategory = (req, res, next) => {
    if(!req.body.categoryName) throw {
        message: "Missing category name"
    }
    next();
}

module.exports = {
    validateCategory
};