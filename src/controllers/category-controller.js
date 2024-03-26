const CategoryService = require("../services/category-service");

const categoryService = new CategoryService();

const create = async(req, res) => {
    try {
        const reqPayload = {
            name: req.body.categoryName
        };
        const response = await categoryService.create(reqPayload);
        return res.status(201).json({
            data: response,
            message: "Successfully created the category",
            status: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed created the category",
            status: false,
            err: error
        });
    }
}

const get = async(req, res) => {
    try {
        const response = await categoryService.get(req.params.id);
        return res.status(201).json({
            data: response,
            message: "Successfully fetched the category",
            status: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to fetch the category",
            status: false,
            err: error
        });
    }
}

const getAll = async(req, res) => {
    try {
        const response = await categoryService.getAll();
        return res.status(201).json({
            data: response,
            message: "Successfully fetched all categories",
            status: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to fetch all categories",
            status: false,
            err: error
        });
    }
}

const destroy = async(req, res) => {
    try {
        const response = await categoryService.destroy(req.params.id);
        return res.status(201).json({
            data: response,
            message: "Successfully deleted the category",
            status: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to delete the category",
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