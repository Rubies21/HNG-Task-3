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
                    <li style={{fontWeight:'700', fontSize:'18px', lineHeight:'22px'}}> <a href="https://opensea.io">Community</a> </li>
                    <li> <a href="https://opensea.io">NFT</a> </li>
                    <li> <a href="https://opensea.io">Tokens</a> </li>
                    <li> <a href="https:landlord.com">Landlords</a> </li>
                    <li> <a href="https://discord.com">Discord</a> </li>
                </ul>
            </div>
            <div className='venues'>
                <ul>
                    <li style={{fontWeight:'700', fontSize:'18px', lineHeight:'22px'}}> <a href="https://opensea.io">Places</a> </li>
                    <li> <a href="https://opensea.io">Castle</a> </li>
                    <li> <a href="https://opensea.io">Farms</a> </li>
                    <li> <a href="https://opensea.io">Beach</a> </li>
                    <li> <a href="https://opensea.io">Learn more</a> </li>
                </ul>
            </div>
            <div className='about'>
                <ul>
                    <li style={{fontWeight:'700', fontSize:'18px', lineHeight:'22px'}}> <a href="https://opensea.io">About us</a> </li>
                    <li> <a href="https://opensea.io">Road map</a> </li>
                    <li> <a href="https://opensea.io">Creators</a> </li>
                    <li> <a href="https://opensea.io">Career</a> </li>
                    <li> <a href="https://opensea.io">Contact us</a> </li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Footer