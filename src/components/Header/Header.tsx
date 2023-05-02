import React, {useEffect, useState} from "react";
import BasicText from "../BasicText/BasicText";
import {Link} from 'react-router-dom';
import './Header.css'
import {getRandomUserName} from '../../services/user-service'
import UserData from "../UserData/UserData";
import Cart from "../Cart/Cart";
import CartContent from "../CartContent/CartContent";

const Header = () => {
    const cardStyle: React.CSSProperties = {
        width: '50%',
        height: '100px',
        top: '10px',
        backgroundColor: 'wight',
        margin: 'auto',
        textAlign: "center",
        //display :"flex"
    }


    return (
        <div style={cardStyle}>
            <BasicText text={"VVVVVVV"} color={"red"}/>

            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link">Main</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/cards" className="navbar__link">Cards</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/about" className="navbar__link">About</Link>
                    </li>
                </ul>
            </nav>
            <UserData/>
        </div>);
}

//export {Card}
export default Header