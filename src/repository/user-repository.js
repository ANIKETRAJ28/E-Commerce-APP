const User = require("../models/user");
const { CartRepository } = require("./index");
const CrudRepository = require("./crud-repository");

const cartRepository = new CartRepository();

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            await cartRepository.create({userId: response.id});
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async destroy(id) {
        try {
            const user = await this.model.findById(id);
            console.log(user.id);
            await cartRepository.destroy(user.id);
            await this.model.findByIdAndDelete(user.id);
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

}

module.exports = UserRepository;