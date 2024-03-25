const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        require: true
    },
    category: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        }
    ],
    ratings: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                unique: true
            },
            rating: {
                type: Number,
                enum: [1, 2, 3, 4, 5],
            }
        }
    ],
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                unique: true
            },
            rating: {
                type: String,
            }
        }
    ]
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;