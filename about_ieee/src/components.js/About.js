import React, {useState, useEffect} from 'react'
import M from 'materialize-css';
import GridsC from './GridsC'
import GridsH from './GridsH'
import Parallax1 from './Parallax1'
import Parallax2 from './Parallax2'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../About.css'



const About = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);
    return(
        <div className="">
        
            <Parallax1 />
            
            <div className=" grid1 section white"><GridsC /></div>
            <div className="gap2">
                <p className="center" data-aos="zoom-in">Something about our team</p>
                <p className="container center" data-aos="zoom-in">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
            </div>
            <Parallax2 />

            <div className=" grid2 section white"><GridsH /></div>
        </div>
    )    
}
export default About
