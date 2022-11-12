import React from 'react'
import metamask from "../../assets/metamask.svg"
import wallet from "../../assets/walletcon.svg"
import "./Popup.css"

const Popup = () => {
  const popup = document.querySelector(".card");

  document.addEventListener("DOMContentLoaded",() => {
    popup.addEventListener("click", Clicked);
  });

  const Clicked = async() =>{
    document.querySelector("body").style.background = "rgba(64, 64, 64, 0.3)";
    document.querySelector(".card").style.visibility = "visible";   
  }
  
  return (
    <div className='card'>
      <div className="sub-card">
      <div className ="top">
        <p>Connect Wallet</p>
        <i class="icon-remove"></i> 
      </div>
      <p id="choose"> Choose preferred wallet</p>
      <div className="metamask">
        <div className="sub-meta">
          <img src={metamask}/>
          <a href="#">Metamask</a>
        </div>
        <i class="icon-angle-right icon-2x"></i>
        
      </div>

      <div className="wallet-con">
        <div className="sub-wallet-con">
          <img src={wallet}/>
          <a href="#">Wallet Connect</a>
        </div>
        <i class="icon-angle-right icon-2x"></i>
        
      </div>
      </div>
    </div>
  )
}

export default Popup
