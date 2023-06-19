import React from "react";
import Header from "./components/Header";
import UserInfos from "./components/CardInfos";
import './styles/card-container.css'

export default function App() {
    return (
        <div className="card-container">
            <Header/>
            <UserInfos/>
        </div>
    )
}