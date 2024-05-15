import Login from './pages/login';
import Signup from './pages/Signup';
import Home from './pages/UserSide/Home'
import AdminNav from './pages/AdminSide/AdminHome';
import AddProductForm from './pages/AdminSide/AddMovies'
import MoviesList from './pages/AdminSide/MoviesList';
import EditMovie from './pages/AdminSide/EditMovie';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <BrowserRouter>
    <Routes>
       {/* UserSIde Routes */}
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/moviesdetails' element={<MovieDetails/>}/> 



       {/* AdminSide Routes  */}
       <Route exact path='/adminhome' element={<AdminNav/>}/>
       <Route exact path='/addproduct' element={<AddProductForm/>}/>
       <Route exact path='/movieslist' element={<MoviesList/>}/>
       <Route exact path='/editmovies' element={<EditMovie/>}/>
       
    </Routes>
  
    </BrowserRouter>
  )
}

export default App
