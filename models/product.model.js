const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    product_name : {
        type : String,
        required : true
    },
    selling_price : {
        type : Number,
        required : true
    },
    date_of_entry : {
        type : Date,
        required : true
    },
    date_of_exit : {
        type : Date,
        required : true
    },
    date_of_expiry : {
        type : Date,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    cost_price : {
        type : Number
    }

}, {
    timestamps : true
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product