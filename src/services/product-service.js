const ProductRepository = require("../repository/product-repository");
const CrudService = require("./crud-service");

const productRepository = new ProductRepository();

class ProductService extends CrudService {
    constructor() {
        super(productRepository);
    }
}

module.exports = ProductService;