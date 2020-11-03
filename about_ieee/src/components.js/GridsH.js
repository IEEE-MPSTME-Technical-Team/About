import React, {useState, useEffect} from 'react'
import sunset from '../img/Sunset.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../GridsH.css'
import team from '../img/team.png'
import mission from '../img/mission.png'
import vision from '../img/vision.png'

const Grids = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);
    return(
        <div className="teamh">
            <div class="row">
                <div class="col s12 l4 push-l7 offset-l1" data-aos="fade-up-left">
                    <img src={team} alt="" class="responsive-img materialboxed" />
                </div>
                <div class="col s12 l6 pull-l6 right-align offset-l1" data-aos="fade-up-right">
                    <h2 class="indigo-text text-darken-4">Head 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum 
                    reprehenderit saepe officiis repudiandae harum vero excepturi alias 
                    nesciunt, ullam cupiditate odio id illo rerum et nisi omnis quibusdam
                    doloribus mollitia!</p>
                </div>
            </div>
          <div class="row">
                <div class="col s12 l4 push-l1" data-aos="fade-up-right">
                    <img src={mission} alt="" class="responsive-img materialboxed" />
                </div>
                <div class="col s12 l6 left-align push-l1 offset-l1" data-aos="fade-up-left">
                    <h2 class="indigo-text text-darken-4">Head 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum 
                    reprehenderit saepe officiis repudiandae harum vero excepturi alias 
                    nesciunt, ullam cupiditate odio id illo rerum et nisi omnis quibusdam
                    doloribus mollitia!</p>
                </div>
          </div>
            <div class="row">
                <div class="col s12 l4 push-l7 offset-l1" data-aos="fade-up-left">
                    <img src={vision} alt="" class="responsive-img materialboxed" />
                </div>
                <div class="col s12 l6 pull-l6 right-align offset-l1" data-aos="fade-up-right">
                    <h2 class="indigo-text text-darken-4">Head 3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum 
                    reprehenderit saepe officiis repudiandae harum vero excepturi alias 
                    nesciunt, ullam cupiditate odio id illo rerum et nisi omnis quibusdam
                    doloribus mollitia!</p>
                </div>
            </div>
            <div class="row">
                <div class="col s12 l4 push-l1" data-aos="fade-up-right">
                    <img src={mission} alt="" class="responsive-img materialboxed" />
                </div>
                <div class="col s12 l6 left-align push-l1 offset-l1" data-aos="fade-up-left">
                    <h2 class="indigo-text text-darken-4">Head 4</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum 
                    reprehenderit saepe officiis repudiandae harum vero excepturi alias 
                    nesciunt, ullam cupiditate odio id illo rerum et nisi omnis quibusdam
                    doloribus mollitia!</p>
                </div>
          </div>
        </div>
      
            
    )
}
export default Grids
