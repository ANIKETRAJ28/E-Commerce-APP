const validateProduct = (req, res, next) => {
    if(
        !req.body.productName ||
        !req.body.productPrice ||
        !req.body.productCategory
    ) return res.status(400).json({
        data: {},
        message: "Missing mandatory items for creation of the product",
        success: false,
        err: {error: "Missing category name or product name or product price"}
    });
    next();
}

module.exports = {
    validateProduct
}