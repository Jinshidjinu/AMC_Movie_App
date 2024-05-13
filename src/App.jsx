
import Home from './pages/UserSide/Home'
import AdminNav from './pages/AdminSide/AdminHome';
import AddProductForm from './pages/AdminSide/AddMovies'
import MoviesList from './pages/AdminSide/MoviesList';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <BrowserRouter>
    <Routes>
       {/* UserSIde Routes */}
      <Route exact path='/home' element={<Home/>}/>



       {/* AdminSide Routes  */}
       <Route exact path='/adminhome' element={<AdminNav/>}/>
       <Route exact path='/addproduct' element={<AddProductForm/>}/>
       <Route exact path='/movieslist' element={<MoviesList/>}/>
       
    </Routes>
  
    </BrowserRouter>
  )
}

export default App
