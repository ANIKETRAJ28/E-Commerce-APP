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

}

module.exports = UserRepository;