const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    products: [
        {
            prodId: Schema.type.ObjectId,
            ref: "Product"
        }
    ]
});

const Category = mongoose.Schema("Category", categorySchema);

module.exports = Category;