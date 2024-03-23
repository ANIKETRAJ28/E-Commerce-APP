const mongoose = require("mongoose");

const connect = async () => {
    await mongoose.connect("mongodb://localhost/e_Commerce_Dev");
}

module.exports = {
    connect
};