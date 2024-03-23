const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user: {
        type: Schema.type.ObjectId,
        ref: "User"
    },
    products: [
        {
            prodId: Schema.type.ObjectId,
            ref: "Product" 
        }
    ]
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;