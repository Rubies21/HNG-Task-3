import React, {useState} from 'react'
import houseImg from "../.././assets/houseImg.svg"
import metamask from "../../assets/metamask.svg"
import wallet from "../../assets/walletcon.svg"
import "./Nav.css"
import "../Popup.css"

const Nav = () => {
  const [show, setShow] = useState(false);
  
  return (
    <body style={{ backgroundColor: show ? "rgba(64, 64, 64, 0.3)" : "#fff"}}>
      <nav>
       
        <img src ={houseImg} style={{position: 'absolute', top:'50%', transform:'translateY(-60%)'}}/>
        <div className = "links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Place to stay</a></li>
            <li><a href="#">NFTs</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>
        <button onClick={() => setShow(true)}>Connect Wallet </button>
      </nav>
      
      <div className='card' style= {{visibility: show ? 'visible' : 'hidden'}}>
      <div className="sub-card">
      <div className ="top">
        <p>Connect Wallet</p>
        <i class="icon-remove" onClick={() => setShow(false)}></i> 
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
  </body>

  )
}

export default Nav
