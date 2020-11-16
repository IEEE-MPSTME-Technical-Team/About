import React, {Component} from 'react'
import Navbar from './components.js/Navbar'
import About from './components.js/About'
import Carousel from './components.js/Carousel'
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'
import team from './img/team.png'
import mission from './img/mission.png'
import vision from './img/vision.png'
import First from './components.js/First'


class App extends Component{
  render() {
    return (
     <div className="App">
       <First/>
       <About/>
       <div className=" slides title">
          <h2>Technical Team</h2>
          <Carousel />
          <h2>Public Relations Team</h2>
          <Carousel />
          <h2>Digital Creatives Team</h2>
          <Carousel />
          <h2>Corporate Relations Team</h2>
          <Carousel />
       </div>
      </div>
    );
  }
}


export default App;








