import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import './Card.css'
import {Product} from "../../types/products";
import {useDispatch} from "react-redux";
import {addItem} from "../../redux/cart/slice";
import {cardData as products} from "../../data/cardsData"

interface CardProps {
    setBgColor : Dispatch<SetStateAction<string>>,
    bgColor?: string,
    cardData: Product
}

const Card = (props: CardProps) => {
    const [count, setCount] = useState(0);

    const moreOneFunction = (str: string, event: React.SyntheticEvent) => {
        console.log("str");
    }

    const addToCart = () => {
        dispatch(addItem({id,cardName,count,price,inStoke: false}));
    }

    const {cardData, bgColor} = props;
    const {id,cardName, price, inStoke} = cardData;

    const dispatch = useDispatch();

    const handleIncrement = (cardName : string) => {
        setCount((count) => count + 1);
        alert(cardName);
    };

    const handleDecrement = () => {
        setCount((count) => count - 1);
    };


//////////////////////// USE EFFECT /////////////////////////////
//     const [number, setNumber] = useState(0);
//     useEffect(() => {
//         const intervalMy = setInterval(() => {
//             setNumber(Math.floor(Math.random() * 100));
//             console.log("SHIMI")
//         }, 1000);
//         return clearInterval(intervalMy)
//     }, []);



/////////////////////////////////////////////////////////////////////
const isNameShimi : boolean = cardName === "PROD 1";
/////////////////////////////////////////////////////////////////////
   return (
        <div className="cardStyle" /*id={"cardId"}*/>
            <div><h1>{cardName}</h1></div>
            {/*{isNameShimi ? <div><h1>{cardName}</h1></div> : <div><h1>NOT SHIMI</h1></div>}*/}
            <div><h1>{price} &#8362;</h1></div>
            <div>
                {inStoke ? (
                    <button onClick={(event) => {
                         addToCart()
                        //handleClick(id)
                    }} className="buttonBuy">Add TO CART</button>
                ) : <button className="buttonBuyDisabled">Add to Cart</button>}
            </div>
            <div className={"cardBottomStyle"}>
                <h4> IN STOKE : {inStoke ? "YES" : "NO"}</h4>
                {/*<div>NUMBER : {number}</div>*/}
                <p> COUNT : {count}</p>
                <div className={"cardButtons"}>
                <button id="increment" onClick={()=>handleIncrement(cardName)}>+</button>
                <button id="decrement" onClick={handleDecrement}>-</button>
                </div>
            </div>
        </div>
    );
}

//export {Card}
export default Card;