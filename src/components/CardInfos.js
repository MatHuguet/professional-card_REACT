import React from "react";
import '../styles/user-infos.css'
import LogoMail from '../img/icons8-mail-96.png'
import LogoLinkedin from '../img/linkedin.png'

export default function UserInfos() {
    return (
        <div className="infos-container">
        <h1>Dave Lopper</h1>
        <h2>Fullstack Developer</h2>
        <h3>davelopper.web</h3>
        <div className="contact-buttons">
             <button><img src={LogoMail} alt="mail" width="16px"></img>Email</button>
             <button><img src={LogoLinkedin} alt="mail" width="16px"></img>Linkedin</button>
        </div>
        </div>
    )
}