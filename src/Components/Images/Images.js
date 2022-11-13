import React from 'react'
import { useState } from 'react'
import stars from "../../assets/stars.svg"
import "../PlaceToStay/PlaceToStay.css"

const Images = (props) => {
  return (
    <div className="images">
        <div className="the_place">
        <img src={props.Place} className='place_image'/>
       <span className='line1'><p>Desert king</p>
        <p style={{fontWeight:'700'}}>1MBT per night</p></span> 
        <span className='line2'><p>2345km away</p>
        <p>available for 2 weeks stay</p></span>
        <img src={stars} alt="" />
      </div>
      </div>

  )
}

export default Images