import React from "react";
import '../styles/header.css'
import ProfilePic from '../img/profile-man.webp'

export default function Header() {
    return (
        <img className="profile-pic" src={ProfilePic} alt="profile"/>
    )
}