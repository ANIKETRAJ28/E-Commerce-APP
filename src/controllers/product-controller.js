const ProductService = require("../services/product-service");

const productService = new ProductService();

const create = async(req, res) => {
    try {
        const response = await productService.create(req.body);
        return res.status(201).json({
            data: response,
            message: "Successfully created the product",
            status: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed created the product",
            status: false,
            err: error
        });
    }
}

const get = async(req, res) => {
    try {
        const response = await productService.get(req.params.id);
        return res.status(201).json({
            data: response,
            message: "Successfully fetched the product",
            status: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to fetch the product",
            status: false,
            err: error
        });
    }
}

const getAll = async(req, res) => {
    try {
        const response = await productService.getAll();
        return res.status(201).json({
            data: response,
            message: "Successfully fetched all products",
            status: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to fetch all products",
            status: false,
            err: error
        });
    }
}

const destroy = async(req, res) => {
    try {
        const response = await productService.destroy(req.params.id);
        return res.status(201).json({
            data: response,
            message: "Successfully deleted the product",
            status: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to delete the product",
            status: false,
            err: error
        });
    }
}

module.exports = {
    create,
    get,
    getAll,
    destroy
};