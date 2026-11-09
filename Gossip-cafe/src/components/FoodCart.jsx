import "./FoodCart.css";

function FoodCart({ item, addToCart }) {
    return (
        <div className = "food-cart">
            <img src ={item.image} alt={item.name} />

            <div className = "food-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>

                <div className = "food-price">
                    <span>Rs.{ item.price}</span>
                    <button onClick={()=> addToCart(item)}>
                        Add to Cart + </button>
                </div>
            </div>
        </div>
    )
}

export default FoodCart;