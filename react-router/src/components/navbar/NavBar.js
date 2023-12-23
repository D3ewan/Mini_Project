import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import './NavBar.css'
function NavBar() {
    return (
        <nav>
            <div className="banner">My Myntra</div>
            <div className="right-layout">
                <div className="cart-layout">
                    <CiShoppingCart />
                </div>
            </div>
        </nav>
    )
}

export default NavBar