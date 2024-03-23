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
        cartId: {
            type: Schema.type.ObjectId,
            ref: "Cart"
        }
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);
module.exports = User;