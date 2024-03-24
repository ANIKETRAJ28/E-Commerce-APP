const UserRepository = require("../repository/user-repository");
const CrudService = require("./crud-service");

class UserService extends CrudService {
    constructor() {
        const userRepository = new UserRepository();
        super(userRepository);
    }
}

module.exports = UserService;