import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import Wholesale from './components/others/Wholesale';
import LandingPage from './components/LandingPage';
import CardsMain from './components/CardsMain';
import CoffeePacks from './components/CoffeePacks';
import About from './components/About';
import ContactUs from './components/ContactUs';


function App(){
  
  return(

    <div>

      <Router>
            <Navbar />
              <Routes>
                <Route path='/Wholesale' element={<Wholesale/>} />
              </Routes>
      </Router>

      <LandingPage />
      <CardsMain />
      <CoffeePacks />
      <About />
      <ContactUs />
     
      
    </div>
  )
}

export default App
