import { useState } from "react";

import Navbar from "../components/Navbar";
import FoodCart from "../components/FoodCart";
import Cart from "../components/Cart";
import MyCart from "./MyCart";
import "./Order.css";

function Order() {

    const [cartItems, setCartItems] = useState([]);
    const [showMyCart, setShowMyCart] = useState(false);

    function backToMenu() {
        setShowMyCart(false);
    }

    const foodItems = [
        {
            id: 1,
            name: "Cold coffee",
            description: "Chilled coffee with rich flavour",
            price: 150,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfnVu_20k7-mPjj5_3d7X7219gnpJsz4Jo4wq4uP08GA&s=10"
        },
        {
            id: 2,
            name: "Espresso",
            description: "A full-bodied double shot of our premium house blend with notes of dark chocolate",
            price: 120,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWAGmMHsE5bdQGKZ6qZvbS8akYN8D54frzdxWj90ls_w&s=10"
        },
        {
            id: 3,
            name: "Veg Cheese Grilled Sandwich",
            description: "Garden-fresh vegetables and melted cheddar pressed between crispy sourdough",
            price: 160,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Ft5yAb9x8W6icvZBLO_Xe3VguE4X5r2jbjXruzfdYA&s=10"
        },
        {
            id: 4,
            name: "French Fries",
            description: "Crispy golden potato fries",
            price: 60,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3UM3RMsXr0dGy3eEstX7MJMVSalCkkNCTdcJF2mN3jQ&s=10"
        },
        {
            id: 5,
            name: "Red Velvet Pastry",
            description: "Red velvet sponge cake paired with a luxurious cream cheese frosting",
            price: 180,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9ITOlYGEXms9SCT6K16a5gVvyS8VYv9gyb2qs36QUA&s=10"
        },
        {
            id: 6,
            name: "Veg Burger",
            description: "Crispy spiced patty fried golden brown,layered with fresh veggies and flavourful sauces",
            price: 120,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2heR35nRF5oTQucCnOcy-PVrZQYrdN_DjOT_FjVx3wQ&s=10"
        },
    ];

    function addToCart(item) {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (cartItem) => cartItem.id === item.id);

            if (existingItem) {
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id ? {
                        ...cartItem, quantity: cartItem.quantity + 1
                    } : cartItem
                )
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    }

    function increaseQuantity(id) {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? {
                    ...item, quantity: item.quantity + 1
                } : item
            )
        );
    }

    function decreaseQuantity(id) {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? {
                    ...item, quantity: item.quantity - 1
                } : item
            )
                .filter((item) => item.quantity > 0)
        );
    }

    function removeItem(id) {
        setCartItems((prevItems) =>
            prevItems.filter((item) =>
                item.id !== id
            )
        );
    }

    return (
        <>
            <Navbar openCart = {()=>setShowMyCart(true) }
                backToMenu = {backToMenu}
             />

             {showMyCart ? (<MyCart cartItems={cartItems}
             increaseQuantity={increaseQuantity}
             decreaseQuantity={decreaseQuantity}
             removeItem={removeItem}
             backToMenu = {backToMenu}/>
            ):(
              <div className="order">
                <h1>Welcome to Gossip Cafe </h1>
                <p>Good Food, Great Coffee and Better Conversations!</p>
                <h2 id="menu"> Our Menu </h2>

                <div className="food-container">
                    {
                        foodItems.map((item) => (
                            <FoodCart key={item.id}
                                item={item}
                                addToCart={addToCart} />
                        ))
                    }
                </div>
            </div>
            )}

           
        </>
    )
}

export default Order;