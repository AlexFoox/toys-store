import React from "react";

interface BasicTextProps {
    text: string,
    color?: string   // ?  ->   NOT required
}

const BasicText = (props: BasicTextProps) => {

    const {color,text} = props;  //SAME ->      const color = props.color;
    const style={color: color || "black"};

    return (<div style={style}>
        {text}
    </div>);
}

//export {Card}

export default BasicText