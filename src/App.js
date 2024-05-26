
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Map from './components/map';
import Pos from './components/Pos';
import Solution from './components/Solution';
import Welcome from './components/Welcome';
import Section from './components/Section';
import Cardhover from './components/Cardhover';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Home/>
      <Section/>
      <Testimonials/>
      <Solution/>
      <Pos/>
      <Map/>
      <Cardhover/>
      <Footer/>
     
      
      
    </div>
  );
}

export default App;
