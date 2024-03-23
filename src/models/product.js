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
            categId: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        }
    ],
    ratings: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
                unique: true
            },
            rating: {
                type: Number,
                enum: [1, 2, 3, 4, 5],
                required: true
            }
        }
    ],
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
                unique: true
            },
            rating: {
                type: String,
                required: true
            }
        }
    ]
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;