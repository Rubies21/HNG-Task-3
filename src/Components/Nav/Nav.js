import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import houseImg from "../.././assets/houseImg.svg"
import metamask from "../../assets/metamask.svg"
import wallet from "../../assets/walletcon.svg"
import "./Nav.css"
import "../Popup.css"

const Nav = () => {
  const [show, setShow] = useState(false);
  if (show===true){
    document.body.style.backgroundColor = "rgba(64, 64, 64, 0.3)";
  } else{
    document.body.style.backgroundColor = 'white';
  }

  return (
    <div>
      {/* style={{position: 'absolute', top:'50%', transform:'translateY(-60%)'}} */}
      <nav >
        <img src ={houseImg} className='logo' alt=""/>
        <div className = "links">
          <ul>
            <li><Link to ="/">Home</Link> </li>
            <li><Link to ="/place">Place to stay</Link></li>
            <li><a href="https://opensea.io">NFTs</a></li>
            <li><a href="https://google.com">Community</a></li>
          </ul>
          <button onClick={() => setShow(true)}>Connect Wallet </button>
        </div>
        
      </nav>
      
      <div className='card' style= {{visibility: show ? 'visible' : 'hidden'}}>
      <div className="sub-card">
      <div className ="top">
        <p>Connect Wallet</p>
        <i className="icon-remove" onClick={() => setShow(false)}></i> 
      </div>
      <p id="choose"> Choose preferred wallet</p>
      <div className="metamask">
        <div className="sub-meta">
          <img src={metamask} alt="" className='icon'/>
          <a href="https://metamask.com">Metamask</a>
        </div>
        <i className="icon-angle-right icon-2x"></i>
        
      </div>

      <div className="wallet-con">
        <div className="sub-wallet-con">
          <img src={wallet} alt="" className='icon'/>
          <a href="metamask.com">Wallet Connect</a>
        </div>
        <i className="icon-angle-right icon-2x"></i>
        
      </div>
      </div>
  </div>
  </div>

  )
}

export default Nav
