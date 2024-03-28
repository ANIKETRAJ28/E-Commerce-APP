const User = require("../models/user");
const CartRepository = require("./cart-repository");
const CrudRepository = require("./crud-repository");

const cartRepository = new CartRepository();

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async create(data) {
        try {
            const response = await User.create(data);
            const userId = response.id;
            const cart = await cartRepository.create({userId});
            response.cart = cart.id;
            response.encryptPass();
            response.save();
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async destroy(id) {
        try {
            const user = await this.model.findById(id);
            await cartRepository.destroy(user.id);
            await this.model.findByIdAndDelete(user.id);
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async getByEmail(email) {
        try {
            const response = await User.findOne({email});
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

}

module.exports = UserRepository;