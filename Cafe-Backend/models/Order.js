const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    items: [
        {
            id: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ["COD", "UPI", "Card"],
        required: true
    },
    orderStatus: {
        type: String,
        default: "Confirmed"
    }
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;