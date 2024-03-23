const UserRepository = require("../repository/user-repository");

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const response = await this.userRepository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async get(i) {
        try {
            const response = await this.userRepository.get(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.userRepository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await this.userRepository.destroy(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }
}

module.exports = UserService;