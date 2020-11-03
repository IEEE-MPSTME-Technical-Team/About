import React, {useState, useEffect} from 'react'


import 'materialize-css/dist/css/materialize.min.css';
import '../App.css'
import team from '../img/team.png'
import mission from '../img/mission.png'
import vision from '../img/vision.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../First.css'

const First = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);
    return(
    <div className="top">
            <h1 data-aos="fade-down">About Us</h1>
            <div class="row">
                <div class="col s12 l4 push-l7 offset-l1" data-aos="fade-left" >
                    <img src={team} alt="" class="responsive-img materialboxed" />
                </div>
                <div class="col s12 l6 pull-l6 right-align offset-l1" data-aos="fade-right">
                    <h2 class="indigo-text text-darken-4">Our Team</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum 
                        reprehenderit saepe officiis repudiandae harum vero excepturi alias 
                        nesciunt, ullam cupiditate odio id illo rerum et nisi omnis quibusdam
                        doloribus mollitia!</p>
                </div>
            </div>
            <div class="row">
                <div class="col s12 l4 push-l1" data-aos="fade-right">
                <img src={mission} alt="" class="responsive-img materialboxed" />
                </div>
                <div class="col s12 l6 left-align push-l1 offset-l1" data-aos="fade-left">
                <h2 class="indigo-text text-darken-4">Mission</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum 
                    reprehenderit saepe officiis repudiandae harum vero excepturi alias 
                    nesciunt, ullam cupiditate odio id illo rerum et nisi omnis quibusdam
                    doloribus mollitia!</p>
                </div>
            </div>
            <div class="row">
                <div class="col s12 l4 push-l7 offset-l1" data-aos="fade-left">
                    <img src={vision} alt="" class="responsive-img materialboxed" />
                </div>
                <div class="col s12 l6 pull-l6 right-align offset-l1" data-aos="fade-right">
                    <h2 class="indigo-text text-darken-4">Vision</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum 
                        reprehenderit saepe officiis repudiandae harum vero excepturi alias 
                        nesciunt, ullam cupiditate odio id illo rerum et nisi omnis quibusdam
                        doloribus mollitia!</p>
                </div>
            </div>
            </div>

)    
}
export default First