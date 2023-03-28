import React from "react";
import Card from "../Card/Card";
import {cardData as products} from "../../data/cardsData"

const CardContent = () => {
    const cardStyle: React.CSSProperties = {
        top: '10px',
        bottom: '10px',
        display: 'flex',
        flexDirection: 'row',
        padding: '1rem',
        margin: '5rem',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div style={cardStyle}>
            {products.map((card, index) => (
                <div key={index}>
                    <Card cardData={card} bgColor={"black"}/>
                </div>
            ))}
        </div>
    );
}

//export {Card}
export default CardContent