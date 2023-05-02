import React from "react";

const Footer = () => {
    const cardStyle : React.CSSProperties={
        width:'100%',
        backgroundColor:'blue',
        textAlign : "center",
        bottom : "0"

    }
    return(<div style={cardStyle}>
        <a href={"#"}>open me</a>
    </div>);
}

//export {Card}
export default Footer