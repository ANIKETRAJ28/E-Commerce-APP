const CategoryRepository = require("../repository/category-repository");
const CrudService = require("./crud-service");

const categoryRepository = new CategoryRepository();

class CategoryService extends CrudService {
    constructor() {
        super(categoryRepository);
    }

    async getByName(data) {
        try {
            const response = await categoryRepository.getByName(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }
}

module.exports = CategoryService;