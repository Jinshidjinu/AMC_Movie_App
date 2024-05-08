import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <div>
       <Navbar/>
       <Banner/>
    </div>
  )
}

export default App
