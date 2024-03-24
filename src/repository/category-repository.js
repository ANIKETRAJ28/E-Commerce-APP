const Category = require("../models/category");
const CrudRepository = require("./crud-repository");

class CategoryRepository extends CrudRepository{
    constructor() {
        super(Category);
    }
}

module.exports = CategoryRepository;