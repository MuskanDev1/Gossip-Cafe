const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Order = require("./models/Order");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/orders", async (req, res) => {
    try{
        const { items, totalAmount, paymentMethod } = req.body;
        const newOrder = new Order ({
            items,
            totalAmount,
            paymentMethod
        });
        const savedOrder = await newOrder.save();
        res.status(201).json({
            message: "Order saved successfully!!",
            order: savedOrder
        });
    } catch (error) {
        res.status(500).json({
            message: "Error saving order",
            error: error.message
        });
    }
});

mongoose.connect("mongodb://localhost:27017/gossipCafe").then(() => {
    console.log("MongoDB Connected Successfully!");
    
    app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
})
.catch((error) => {
    console.log("MongoDB Connection Error: ",error);
});

app.get("/", (req, res) => {
    res.send("Gossip Cafe Backend is running!");
});

const menuItems = [
    {
        id: 1,
        name: "Cold Coffee",
        price: 120,
        category: "Beverages"
    },
     {
        id: 2,
        name: "Veg Burger",
        price: 100,
        category: "Fast Food"
    },
     {
        id: 3,
        name: "White Sauce Pasta",
        price: 180,
        category: "Italian"
    },
];

app.get("/menu", (req, res) => {
    res.json(menuItems);
})


