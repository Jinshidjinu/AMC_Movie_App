
import Navbar from '../../components/Navbar'
import Banner  from '../../components/Banner'
import Rowpost from '../../components/Rowpost'
import MovieCard from '../../components/MovieCard'
import Footer from '../../components/Footer'

const  Home = () => {
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

export default Home