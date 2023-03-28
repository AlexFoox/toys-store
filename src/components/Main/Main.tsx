import React from "react";
import CardContent from "../CardContent/CardContent";

const Main = () => {
    const cardStyle : React.CSSProperties={
        top: '10px',
        bottom : '10px',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    }
    return(<div style={cardStyle}>
        <CardContent/>
    </div>);
}

//export {Card}
export default Main