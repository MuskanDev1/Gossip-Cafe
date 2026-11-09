const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Gossip Cafe Backend is running!");
});

// Sample food menu
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
    }
];

// Get all menu items
app.get("/menu", (req, res) => {
    res.json(menuItems);
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});