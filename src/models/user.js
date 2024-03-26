const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: "Not a valid email",
        },
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: [6, "Too few characters for password"],
        maxLength: [12, "Very much characters for password"],
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart"
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ],
    feedback: [
        {
            prductName: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            rating: {
                type: Number,
                enum: [1, 2, 3, 4, 5],
            },
            review: {
                type: String,
            }
        }
    ]
}, {timestamps: true});

const User = mongoose.model("User", userSchema);
module.exports = User;