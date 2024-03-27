const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

userSchema.pre("save", function(next) {
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPass = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPass;
    next();
});

userSchema.methods.comparePass = function(pass) {
    return bcrypt.compareSync(pass, this.password);
}

userSchema.methods.generateJWT = function() {
    return jwt.sign({id: this.id, email: this.email}, "eCommerce_secret", {expiresIn: "1h"});
}

const User = mongoose.model("User", userSchema);
module.exports = User;