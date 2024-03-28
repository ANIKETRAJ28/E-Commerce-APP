const Product = require("../models/product");
const CrudRepository = require("./crud-repository");
const CategoryRepository = require("./category-repository");

const categoryRepository = new CategoryRepository();

class ProductRepository extends CrudRepository{
    constructor() {
        super(Product);
    }

    async create(data) {
        try {
            let category = await categoryRepository.getByName(data.category);
            if(!category) {
                category = await categoryRepository.create({name: data.categoryName});
            }
            data.category = category.id;
            const response = await Product.create(data);
            await response.save();
            await category.products.push(response.id);
            await category.save();
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = ProductRepository;