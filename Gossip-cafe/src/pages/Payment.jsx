import { useState } from "react";
import "./Payment.css";

function Payment({ cartItems, onBackToCart }) {

    const [paymentMethod, setPaymentMethod] = useState("COD");
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handlePayment = async () => {
        try {
            const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            const response = await fetch("http://localhost:3000/api/orders",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    items: cartItems,
                    totalAmount: totalAmount,
                    paymentMethod: paymentMethod
                })
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Order could not be saved");
            }
            alert("Order saved successfully!!");
            setOrderConfirmed(true);
        } catch (error) {
            console.error("Order Error:",error);
            alert("Something went wrong: "+ error.message);
        }
    }; 

    if (orderConfirmed) {
        return (
            <div className="confirmation-page">
                <div className="confirmation-card">
                    <div className="success-icon">✅</div>
                    <h1>Order Confirmed!</h1>
                    <p>Thank you for ordering from Gossip Cafe 🧋💕</p>
                    <h3>Order Details</h3>

                    {cartItems.map((item) => (
                        <div className="summary-item" key={item.id}>
                            <span>{item.name} x {item.quantity}</span>
                            <span>Rs. {item.price * item.quantity}</span>
                        </div>
                    ))}
                    <h3>Total: Rs.{total}</h3>
                    <p>Payment Method: <strong>{paymentMethod}</strong></p>
                    <p className="demo-note">
                        This is a demo order.No real payment has been processeed.
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div className="payment-page">

            <h1>Complete Your Order </h1>
            <p>Select your preferred payment method</p>

            <div className="payment-container">

                <div className="order-summary">
                    <h2>Order Summary</h2>

                    {cartItems.map((item) => (
                        <div key={item.id} className="summary-item">
                            <span>{item.name} × {item.quantity}</span>
                            <span>₹{item.price * item.quantity}</span>
                        </div>
                    ))}

                    <h3>Total Amount: ₹{total}</h3>
                </div>

                <div className="payment-methods">

                    <h2>Choose Payment Method</h2>

                    <label>
                        <input
                            type="radio"
                            value="COD"
                            checked={paymentMethod === "COD"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Cash on Delivery
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="UPI"
                            checked={paymentMethod === "UPI"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        UPI (Google Pay / PhonePe / Paytm)
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Card"
                            checked={paymentMethod === "Card"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Debit / Credit Card
                    </label>

                    <button onClick={handlePayment}>
                        Confirm Order
                    </button>

                    <button className="back-btn" onClick={onBackToCart}>
                        Back to Cart
                    </button>

                </div>

            </div>
        </div>
    );
}

export default Payment;