import React from 'react'
import heroimg from '../assests/main.jpg'
import "./Home.css"
import CountUp from 'react-countup';
const Home = () => {
  return (
    <>
    <h1 id='hline'>Welcome to Chef Finder</h1>
    <div id='mide'><div className='hero'>
        <div className="left">
                <h1 id='l1h'>Cooking Staff</h1><br/>
                <p>Treat Your Palate to Mouthwatering Delights Cooked by Our Proficient Cooking Maids. Delight in Gourmet Delicacies Served Straight to Your Dinner Table.</p>
        </div>
        <div className="right">
            <img src={heroimg} id='mimg'/>
        </div>
    
    
    </div>

    <div className='numc'>
        <div id='nl'><div>
            Number of Chefs with Us</div><div id='ct1'><CountUp duration={7} end={240} />+</div>
        </div>
        <div id='nr'><div >Number of Employees</div>
        <div id='ct1'><CountUp duration={7} end={478} />+</div>

        </div>
    </div>
    </div>
    </>
  )
}

export default Home