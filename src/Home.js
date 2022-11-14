import React from 'react'
import FirstMain from './Components/FirstMain/FirstMain'
import SecondMain from './Components/SecondMain/SecondMain'
import ThirdMain from './Components/ThirdMain/ThirdMain'

import "./App.css"

const Home = () => {
  return (
    <div>
      <FirstMain/> 
      <SecondMain/>
      <ThirdMain/>
    </div>
  )
}

export default Home
