import React from 'react'
import "./FirstMain.css"
import image1 from "../../assets/image 1.svg"
import image2 from "../../assets/image 2.svg"
import image3 from "../../assets/image 3.svg"
import image4 from "../../assets/image 4.svg"
import mbToken from "../../assets/mbToken.svg"
import meta from "../../assets/meta.svg"
import openSea from "../../assets/openSea.svg"


const FirstMain = () => {
  return (
    <div> 
      <div className="content">
        <div className="texts">
        <p className="title-text">Rent a <span style={{color: '#A02279', fontWeight:'600'}}>Place</span> away from <span style={{color: '#A02279', fontWeight:'600'}}>Home</span> in the <span style={{color: '#A02279', fontWeight:'600'}}>Metaverse</span></p>
        <p className="body-text">We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <form>
          <input type="text" placeholder='Search for location' className='search' style={{height: '54px'}}/>
          <button>Search</button>
        </form>
        </div>
        <div className="images">
          <img src={image1} alt="" />
          <img src={image3} alt="" style={{marginTop: '-200px'}} />
          <img src={image2} alt="" style={{marginTop: '-80px'}}/>
          <img src={image4} alt="" style={{marginTop: '-280px'}}/>
        </div>
      </div>
      <div className="top-footer">
        <div className="smaller-div">
        <img src={mbToken} alt="" />
        <img src={meta} alt="" />
        <img src={openSea} alt="" />
        </div>
      </div>
    </div>
  )
}

export default FirstMain