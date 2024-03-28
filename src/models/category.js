const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        allowNull: false
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
}, {timestamps: true});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;