
import Home from './pages/UserSide/Home'
import AdminNav from './pages/AdminSide/AdminHome';
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
    </Routes>
  
    </BrowserRouter>
  )
}

export default App
