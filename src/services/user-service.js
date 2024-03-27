const UserRepository = require("../repository/user-repository");
const CrudService = require("./crud-service");

const userRepository = new UserRepository();

class UserService extends CrudService {
    constructor() {
        super(userRepository);
    }

    async signIn(data) {
        try {
            const user = await userRepository.getByEmail(data.email);
            if(!user) {
                throw {
                    message: "User not found"
                };
            }
            if(!user.comparePass(data.password)) {
                throw {
                    message: "Wrong password"
                };
            }
            const token = user.generateJWT();
            return token;
        } catch (error) {
            console.log("Something went wrong while signIn");
            throw error;
        }
    }
}

module.exports = UserService;