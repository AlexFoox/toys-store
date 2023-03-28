import React from "react";
import BasicText from "../BasicText/BasicText";

const Header = () => {
    const cardStyle : React.CSSProperties={
        width:'50%',
        height:'100px',
        top: '10px',
        backgroundColor:'wight',
        margin :'auto',
        textAlign : "center",
        //display :"flex"
    }
    const headerName = "TOYS STORE";

    return(<div style={cardStyle}>
        <BasicText text={"xxxx"} color={"red"}/>
        <BasicText text={"ssss"} color={"blue"}/>
        <h1>{headerName}</h1>
    </div>);
}

//export {Card}
export default Header