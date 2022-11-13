import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"
import PlaceToStay from './Components/PlaceToStay/PlaceToStay';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div>
       <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place" element={<PlaceToStay />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
