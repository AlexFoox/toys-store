import React from "react";

const Footer = () => {
    const cardStyle : React.CSSProperties={
        width:'100%',
        height:'100px',
        backgroundColor:'blue',
        textAlign : "center",
        position : "fixed",
        bottom : "0"

    }
    return(<div style={cardStyle}>
        <a href={"#"}>open me</a>
    </div>);
}

//export {Card}
export default Footer