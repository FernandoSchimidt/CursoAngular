const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    department: String,
    prive: Number
});

module.exports = mongoose.model("Product", productSchema);