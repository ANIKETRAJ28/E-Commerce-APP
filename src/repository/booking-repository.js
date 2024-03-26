const Booking = require("../models/booking");
const UserRepository = require("./user-repository");
const CrudRepository = require("./crud-repository");
const CartRepository = require("./cart-repository");

const userRepository = new UserRepository();
const cartRepository = new CartRepository();

class BookingRepository extends CrudRepository{
    constructor() {
        super(Booking);
    }

    async create(data) {
        try {
            const user = await userRepository.get(data.userId);
            const cartId = user.cart;
            const cart = await cartRepository.get(cartId);
            const products = cart.products;
            const bookingPayload = {user: data.userId,product: products};
            const booking = await Booking.create(bookingPayload);
            cart.products = [];
            await cart.save();
            return booking;
        } catch (error) {
            console.log("Something went wrong in repositoy layer");
            throw error;
        }
    }
}

module.exports = BookingRepository;