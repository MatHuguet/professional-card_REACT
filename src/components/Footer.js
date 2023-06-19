import React from "react";

import LogoFacebook from '../img/icons8-facebook-grey96.png'
import LogoGithub from '../img/icons8-github-grey90.png'
import LogoInstagram from '../img/icons8-instagram-grey100.png'
import LogoTwitter from '../img/icons8-twitter-grey96.png'


export default function Footer() {
    return (
        <div className="footer-container">
            <img src={LogoFacebook} alt="Facebook"></img>
            <img src={LogoGithub} alt="Github"></img>
            <img src={LogoInstagram} alt="Instagram"></img>
            <img src={LogoTwitter} alt="Twitter"></img>

        
    </div>
    )

}