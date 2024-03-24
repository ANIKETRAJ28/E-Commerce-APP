const Cart = require("../models/cart");
const CrudRepository = require("./crud-repository");

class CartRepository extends CrudRepository{
    constructor() {
        super(Cart);
    }
}

module.exports = CartRepository;