class CrudRepository {
    constructor(model) {
        this.model = model
    }

    async create(data) {
        try {
            console.log(data);
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
    
    async get(id) {
        try {
            const response = await this.model.findById(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
    
    async getAll() {
        try {
            const response = await this.model.find();
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async destroy(id) {
        try {
            await this.model.findByIdAndDelete(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = CrudRepository;