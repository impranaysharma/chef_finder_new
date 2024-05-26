
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Map from './components/map';
import Pos from './components/Pos';
import Solution from './components/Solution';
import Welcome from './components/Welcome';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Home/>
      
      <Testimonials/>
      <Solution/>
      <Pos/>
      <Map/>
      <Footer/>
     
      
      
    </div>
  );
}

export default App;
