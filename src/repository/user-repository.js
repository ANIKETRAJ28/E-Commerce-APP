const User = require("../models/user");

class UserRepository {
    
    async create(data) {
        try {
            const response = await User.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
    
    async get(id) {
        try {
            const response = await User.findById(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
    
    async getAll() {
        try {
            const response = await User.find();
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async destroy(id) {
        try {
            await User.findByIdAndDelete(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = UserRepository;