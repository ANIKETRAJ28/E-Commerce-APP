const CartRepository = require("../repository/cart-repository");
const CrudService = require("./crud-service");

const cartRepository = new CartRepository();

class CartService extends CrudService{
    constructor() {
        super(cartRepository);
    }

    async addItems(data) {
        try {
            const response = await cartRepository.addItems(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw error;
        }
    }
}

module.exports = CartService;