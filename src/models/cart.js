const mongoose = require("mongoose");
const User = require("./user");

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: true,
        required: true
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
}, {timestamps: true});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;