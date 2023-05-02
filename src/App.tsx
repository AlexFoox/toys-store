import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {Route, Routes} from 'react-router-dom';
import Main from "./components/Main/Main";
import About from "./components/About/About";
import CardContent from "./components/CardContent/CardContent";


const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/cards" element={<CardContent/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </div>

    );
}

export default App;
