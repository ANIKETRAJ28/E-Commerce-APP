const Cart = require("../models/cart");
const CrudRepository = require("./crud-repository");

class CartRepository extends CrudRepository{
    constructor() {
        super(Cart);
    }

    async destroy(id) {
        try {
            await Cart.findOneAndDelete({userId: id});
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async addItems(data) {
        try {
            const cart = await Cart.findById(data.cartId);
            await cart.products.push(data.item);
            await cart.save();
            return cart;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = CartRepository;