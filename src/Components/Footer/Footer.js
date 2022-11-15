import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import logo from '../../assets/logo.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="sub-footer">
            <div className='logo'>
                <img src={logo} alt="" style={{paddingTop:'30px'}}/>
                <div className='media'>
                    <img src={facebook} alt="" />
                    <img src={instagram} style ={{paddingLeft: '20px'}} alt=""/>
                    <img src={twitter} style ={{paddingLeft: '20px'}} alt=""/>
                </div>
                <p style ={{paddingTop:'0px'}}>&copy; 2022 Metabnb</p>
            </div>

            <div className='community'>
                <ul>
                    <li style={{fontWeight:'700', fontSize:'18px', lineHeight:'22px'}}> <a href="#">Community</a> </li>
                    <li> <a href="#">NFT</a> </li>
                    <li> <a href="#">Tokens</a> </li>
                    <li> <a href="#">Landlords</a> </li>
                    <li> <a href="#">Discord</a> </li>
                </ul>
            </div>
            <div className='venues'>
                <ul>
                    <li style={{fontWeight:'700', fontSize:'18px', lineHeight:'22px'}}> <a href="#">Places</a> </li>
                    <li> <a href="#">Castle</a> </li>
                    <li> <a href="#">Farms</a> </li>
                    <li> <a href="#">Beach</a> </li>
                    <li> <a href="#">Learn more</a> </li>
                </ul>
            </div>
            <div className='about'>
                <ul>
                    <li style={{fontWeight:'700', fontSize:'18px', lineHeight:'22px'}}> <a href="#">About us</a> </li>
                    <li> <a href="#">Road map</a> </li>
                    <li> <a href="#">Creators</a> </li>
                    <li> <a href="#">Career</a> </li>
                    <li> <a href="#">Contact us</a> </li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Footer