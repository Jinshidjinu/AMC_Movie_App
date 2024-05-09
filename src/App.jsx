import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Rowpost from './components/Rowpost';
import MovieCard from './components/MovieCard';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <div>
       <Navbar/>
       <Banner/>
       <Rowpost/>
       <MovieCard/>
    </div>
  )
}

export default App
