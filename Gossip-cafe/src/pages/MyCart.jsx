import Cart from "../components/Cart";
import "./MyCart.css";

function MyCart({
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    backToMenu
}) {
    return (
        <div className="my-cart">
            <button className="menu_btn" onClick={backToMenu}>
                Back To Menu
            </button>
            <h1>My Shopping Cart</h1>
            <Cart
                cartItems = {cartItems}
                increaseQuantity = {increaseQuantity}
                decreaseQuantity = {decreaseQuantity}
                removeItem = {removeItem}
            />

        </div>
    )
}

export default MyCart;