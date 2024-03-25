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
}

module.exports = CartRepository;