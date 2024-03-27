const validateProduct = (req, res, next) => {
    if(
        !req.body.productName ||
        !req.body.productPrice ||
        !req.body.productCategory
    ) throw {   
        message: "Missing category name or product name or product price"
    };
    next();
}

module.exports = {
    validateProduct
}