const CartService = require("../services/cart-service");

const cartService = new CartService();

const addItems = async (req, res) => {
    try {
        const response = await cartService.addItems(req.body);
        return res.status(201).json({
            data: response,
            message: "Added items in the cart",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to add items in the cart",
            success: false,
            err: error
        });
    }
}

module.exports = {
    addItems
}