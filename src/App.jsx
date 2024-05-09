import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Rowpost from './components/Rowpost';
import MovieCard from './components/MovieCard';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <div>
       <Navbar/>
       <Banner/>
       <Rowpost/>
       <MovieCard/>
       <Footer/>
    </div>
  )
}

export default App
