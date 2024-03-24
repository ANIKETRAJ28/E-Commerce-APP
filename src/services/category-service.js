const CategoryRepository = require("../repository/category-repository");
const CrudService = require("./crud-service");

class CategoryService extends CrudService {
    constructor() {
        const categoryRepository = new CategoryRepository();
        super(categoryRepository);
    }
}

module.exports = CategoryService;