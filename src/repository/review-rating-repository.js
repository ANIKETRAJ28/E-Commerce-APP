const ProductRepository = require("./product-repository");
const UserRepository = require("./user-repository");

const productRepository = new ProductRepository();
const userRepository = new UserRepository();

class ReviewRatingRepository {

    async create(data) {
        try {
            var flag = false;
            const user = await userRepository.get(data.userId);
            user.products.forEach(prod => {
                if(prod.id == data.productId) {
                    flag = true;
                }
            });
            if(!flag) throw {
                message: "User have not bought the product"
            }
            const response = await productRepository.get(data.productId);
            
            let feedback = {};
            feedback.prductName = response.id;
            if(data.rating) {
                await response.ratings.push({
                    user: data.user,
                    rating: data.rating
                });
                feedback.rating = data.rating;
            }
            if(data.review) {
                await response.reviews.push({
                    user: data.userId,
                    rating: data.review
                });
                feedback.review = data.review;
            }
            await user.feedback.push(feedback);
            await user.save();
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