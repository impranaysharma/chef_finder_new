
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Map from './components/map';
import Pos from './components/Pos';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      
      <Testimonials/>
      <Pos/>
      <Map/>
      <Footer/>
      
    </div>
  );
}

export default App;
