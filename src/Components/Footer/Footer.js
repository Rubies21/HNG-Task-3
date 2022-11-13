import React from 'react'
import './Footer.css'
import meta from '../../assets/meta.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="sub-footer">
            <div className='logo'>
                <img src={meta} alt="" />
                <div className='media'>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                </div>
                <p>&copy; 2022 Metabnb</p>
            </div>

            <div className='community'>
                <ul>
                    <li> <a href="#">Community</a> </li>
                    <li> <a href="#">NFT</a> </li>
                    <li> <a href="#">Tokens</a> </li>
                    <li> <a href="#">Landlords</a> </li>
                    <li> <a href="#">Discord</a> </li>
                </ul>
            </div>
            <div className='places'>
                <ul>
                    <li> <a href="#">Places</a> </li>
                    <li> <a href="#">Castle</a> </li>
                    <li> <a href="#">Farms</a> </li>
                    <li> <a href="#">Beach</a> </li>
                    <li> <a href="#">Learn more</a> </li>
                </ul>
            </div>
            <div className='about'>
                <ul>
                    <li> <a href="#">About us</a> </li>
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