import React from 'react'
import "../Images/Images.js"
import slider from "../../assets/slider.svg"
import Images from '../Images/Images.js'
import Place1 from "../../assets/Place1.svg"
import Place2 from "../../assets/Place2.svg"
import Place3 from "../../assets/Place3.svg"
import Place4 from "../../assets/Place4.svg"
import Place5 from "../../assets/Place5.svg"
import Place6 from "../../assets/Place6.svg"
import Place7 from "../../assets/Place7.svg"
import Place8 from "../../assets/Place8.svg"
import Place9 from "../../assets/Place9.svg"
import Place10 from "../../assets/Place10.svg"
import Place11 from "../../assets/Place11.svg"
import Place12 from "../../assets/Place12.svg"
import Place13 from "../../assets/Place13.svg"
import Place14 from "../../assets/Place14.svg"
import Place15 from "../../assets/Place15.svg"
import Place16 from "../../assets/Place 16.svg"


const PlaceToStay = () => {
  return (
    <div className='overall'>
      <div className="wrapping-div">
      <div className="nav2">
        <ul>
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>fantast city</li>
          <li>beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>
        <button className='this-button'> Location
          <img src={slider} alt="" />
        </button>

      </div>
      </div>
      <div className ='places'>
      
      <div className='divv'>
         <Images Place ={Place1} />
         <Images Place ={Place2} />
         <Images Place ={Place3} />
         <Images Place ={Place4} />
      </div>
     <div className='divv'>
          <Images Place ={Place5} />
          <Images Place ={Place6} />
          <Images Place ={Place7} />
          <Images Place ={Place8} />
     </div>
      <div className='divv'>
        <Images Place ={Place9} />
        <Images Place ={Place10} />
        <Images Place ={Place11} />
        <Images Place ={Place12} />
      </div>
      <div className='divv'>
        <Images Place ={Place13} />
        <Images Place ={Place14} />
        <Images Place ={Place15} />
        <Images Place ={Place16} />
      </div>


      </div>

      
    </div>
  )
}

export default PlaceToStay
