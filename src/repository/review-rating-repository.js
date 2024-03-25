const ProductRepository = require("./product-repository");

const productRepository = new ProductRepository();

class ReviewRatingRepository {

    async create(data) {
        try {
            const response = await productRepository.get(data.id);
            if(data.rating) {
                await response.ratings.push({
                    user: data.user,
                    rating: data.rating
                });
            }
            if(data.review) {
                await response.reviews.push({
                    user: data.user,
                    rating: data.review
                });
            }
            await response.save();
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async get(id) {
        try {
            const response = await productRepository.get(id).populate('reviews').populate('ratings');
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await productRepository.getAll().populate('reviews').populate('ratings');
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await this.repository.destroy(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }
}

module.exports = ReviewRatingRepository;