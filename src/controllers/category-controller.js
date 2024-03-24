const CategoryService = require("../services/category-service");

const categoryService = new CategoryService();

const create = async(req, res) => {
    try {
        const response = await categoryService.create(req.body);
        return res.status(201).json({
            data: response,
            message: "Successfully created the user",
            status: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed created the user",
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
            message: "Successfully fetched the user",
            status: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to fetch the user",
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
            message: "Successfully fetched all users",
            status: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to fetch all users",
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
            message: "Successfully deleted the user",
            status: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Failed to delete the user",
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