import React from 'react'
import "./FirstMain.css"


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
      </div>
    </div>
  )
}

export default FirstMain
