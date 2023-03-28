import React, {useEffect, useState} from "react";
import './Card.css'
import {Product} from "../../types/products";

interface CardProps {
    bgColor?: string
    cardData: Product;
}

const Card = (props: CardProps) => {
    const [count, setCount] = useState(0);

    const moreOneFunction = (str: string, event: React.SyntheticEvent) => {
        alert(str)
    }

    const {cardData, bgColor} = props;
    const {cardName, price, inStoke} = cardData;

    const handleIncrement = () => {
        //setCount(count + 1);
        setCount((count) => count + 1);
    };

    const handleDecrement = () => {
        setCount((count) => count - 1);
    };


//////////////////////// USE EFFECT /////////////////////////////
    useEffect(() => {
    }, [count]);

    const [number, setNumber] = useState(0);
    useEffect(() => {
        const intervalMy = setInterval(() => {
            setNumber(Math.floor(Math.random() * 100));
            console.log("SHIMI")
        }, 1000);


        return clearInterval(intervalMy)
    }, []);

    // useEffect(() => {
    //     setCount((count) =>count + 1);
    // }, [number]);

/////////////////////////////////////////////////////////////////////
    return (
        <div className="cardStyle" id={"cardId"}>
            <div><h1>{cardName}</h1></div>
            <div><h1>Price : {price} NIS</h1></div>
            <div>
                {inStoke ? (
                    <button onClick={(event) => {
                        moreOneFunction("xxxxx", event)
                    }} className="buttonBuy">Add TO CART</button>
                ) : <button className="buttonBuyDisabled">Add TO CART</button>}
            </div>
            <div className={"cardBottomStyle"}>
                <h4> IN STOKE : {inStoke ? "YES" : "NO"}</h4>
                <div>NUMBER : {number}</div>
                <p> COUNT : {count}</p>
                <button id="increment" onClick={handleIncrement}>+</button>
                <button id="decrement" onClick={handleDecrement}>-</button>

            </div>
        </div>
    );
}

//export {Card}
export default Card;