import React from "react";
import './Card.css'


const Card = () => {

    const handleClick = (e: React.SyntheticEvent) => {
        console.log(e)
    }

    const moreOneFunction = (str : string,event :React.SyntheticEvent) => {
        alert(str)
    }

    return (
        <div className="cardStyle" id={"cardId"}>
            <div><h1>PROD 1</h1></div>
            <div><h1>Price : 100 NIS</h1></div>
            <div>
                <button onClick={(event) => {moreOneFunction("xxxxx",event)}} className="buttonBuy">Add TO CART</button>
            </div>
        </div>
    );
}

//export {Card}
export default Card;