import React from 'react'
import "./ThirdMain.css"
import learnFrame from "../../assets/learnFrame.svg"

const ThirdMain = () => {
  return (
    <div className='main-container'>
        <div className="texts">
            <p className='heading'>Metabnb NFTs</p>
            <p className='paragraph-text'>Discover our NFT gift cards collection. Loyal customers get amazing gift cards which are traded as NFTs. These NFTs give our customer access to loads of our exclusive services</p>
            <button className='learn'>Learn more</button>
        </div>

        <img src={learnFrame} alt="" />
        
    </div>
  )
}

export default ThirdMain