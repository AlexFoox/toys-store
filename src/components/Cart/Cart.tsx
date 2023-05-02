import React from 'react';
import './Cart.css'
interface Cart {
    itemCount: number;
}

const Cart: React.FC<Cart> = ({ itemCount }) => (
    <div className="cart-icon">
        <i className="fa fa-shopping-cart" />
        <span className="item-count">{itemCount}</span>
    </div>
);


export default Cart;