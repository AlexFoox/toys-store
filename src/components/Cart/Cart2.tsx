import React, {useEffect, useState} from 'react';
import './Cart.css'
import {RootState, store} from "../../redux/store/store";
import {useDispatch, useSelector} from "react-redux";
import {removeItem} from "../../redux/cart/slice";
import {getFullName} from "../../services/user-service";
import {nameType} from "../../types/users";
function Cart2() {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);
    const [count, setCount] = useState(0);

    console.log("@@@", items)

    const removeItemFromCart = (id : number) => {
        dispatch(removeItem(id))
    }

    const handleIncrement = () => {
        setCount((count) => count + 1);
    };

    const handleDecrement = () => {
        setCount((count) => count - 1);
    };



    return (
        <div className="cart">
            <div>
                <p>COUNT ITEMS : <span className="cart-count">{items.length}</span> </p>
            </div>

            <div> {items.map((item) => (
                <div key={item.id}>
                    <span> item Name: {item.cardName}</span>
                    <p> COUNT : {count}</p>
                    <div className={"cartCardButtons"}>
                        <button id="increment" onClick={handleIncrement}>+</button>
                        <button id="decrement" onClick={handleDecrement}>-</button>
                    </div>
                    <button className={"deleteButton"} onClick={()=>removeItemFromCart(item.id)}>REMOVE</button>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Cart2;