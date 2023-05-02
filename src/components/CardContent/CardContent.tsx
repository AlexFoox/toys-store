import React, {useState} from "react";
import Card from "../Card/Card";
import {cardData as products} from "../../data/cardsData"
import './CardContent.css'
import CartContent from "../CartContent/CartContent";

const CardContent = () => {
    const [bgColor, setBgColor] = useState("red");
    return (
        <div>
            <div className={"cardContentRowStyle"}>
                {products.map((card) => (
                    <div key={card.id}>
                        <Card
                            setBgColor={setBgColor}
                            cardData={card}
                            bgColor={bgColor}/>
                    </div>
                ))}
            </div>
            <div className={"cartContentRowStyle"}>
                <CartContent/>
            </div>
        </div>
    );
}

//export {Card}
export default CardContent