import React from "react"
import Header from "./components/Header"
import UserInfos from "./components/CardInfos"
import Text from "./components/Text"
import Footer from "./components/Footer"
import "./styles/card-container.css"
import  "./styles/footer.css"

export default function App() {
    return (
        <div className="card-container">
            <Header/>
            <UserInfos/>
            <Text/>
            <Footer/>
        </div>
    )
}