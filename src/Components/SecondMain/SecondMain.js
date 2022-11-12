import React from 'react'
import "./SecondMain.css"
import Home1 from "../../assets/Home1.svg"
const SecondMain = () => {
  return (
    <div>
        <header>
            <p id="header-text">Inspiration for your next adventure</p>
        </header>
        <img src={Home1} className="love"/>
    </div>
  )
}

export default SecondMain
