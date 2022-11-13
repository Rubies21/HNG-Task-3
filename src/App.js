import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"
import PlaceToStay from './Components/PlaceToStay/PlaceToStay';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
       <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place" element={<PlaceToStay />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
