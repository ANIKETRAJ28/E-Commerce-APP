const Category = require("../models/category");
const CrudRepository = require("./crud-repository");

class CategoryRepository extends CrudRepository{
    constructor() {
        super(Category);
    }

    async getByName(data) {
        try {
            const response = await Category.findOne({
                name: data
            });
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = CategoryRepository;