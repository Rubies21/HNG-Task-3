import React from 'react'
import houseImg from "../.././assets/houseImg.svg"
import "./Nav.css"

const Nav = () => {
 
  return (
    <nav>
      <img src ={houseImg}/>
      <div className = "links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Place to stay</a></li>
          <li><a href="#">NFTs</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </div>
      <button> Connect Wallet </button>
    </nav>
  )
}

export default Nav
