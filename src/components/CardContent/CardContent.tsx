import React from "react";
import Card from "../Card/Card";

const CardContent = () => {
    const cardStyle : React.CSSProperties={
        top: '10px',
        bottom : '10px',
        display : 'flex',
        flexDirection : 'row',
        padding: '1rem',
        margin : '5rem'
    }
    const Cards = [<Card/>,<Card/>,<Card/>]
    const clientsNames = ["Mr. X", "Mr. Y" ,"Mr. W"]
    return(<div style={cardStyle}>
        {Cards.map((card,index) => (
            <div key={index}>
                <Card/>
            </div>
        ))}
    </div>);
}

//export {Card}
export default CardContent