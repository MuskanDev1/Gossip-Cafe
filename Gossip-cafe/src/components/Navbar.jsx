import "./Navbar.css";

function Navbar({openCart, backToMenu}){
    return (
        <nav className="navbar">

            <div className="brand">
                <img 
                    src="/cafe_logo.jpeg"
                    alt = "Gossip Cafe Logo"
                    className="brand-logo"
                />
                <div className="brand-name">
                    <h2>💕Welcome to Gossip Cafe!💕</h2>
                    <p>Sip🧋 Talk 🗣️ Repeat🔂</p>
                    <span>Good Coffee,Great conversations and Memorable moments</span>

                </div>
            </div>

            <div className="nav-links">
                <button onClick={backToMenu}>Menu</button>
                <button className="cart-btn" onClick={openCart}>My Cart</button>

            </div>

        </nav>
    )
}

export default Navbar;