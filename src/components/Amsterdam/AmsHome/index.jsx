import React from 'react'
import { useEffect } from 'react'
import { useGlobalContext } from '../../../context'
import Footer from '../../Footer'
import Events from '../../Rotherdam/RothHome/Events'
import Habor from '../../../assets/habor-vid.mp4'
import Slider from '../../Rotherdam/RothHome/Slider'
import "./index.scss"

const AmsHome = () => {
    const {setroth, roth} = useGlobalContext()

  
    useEffect(() => {
      document.title = "Amsterdam"
   }, []);
  return (
   <section>
   <div className='main'>
      <div className="video">
      <div className="overlay">
      </div>
      <video src={Habor} autoPlay loop muted className='vid'/>
      <div className="contents">
        <div className="in-contents">
          <div className="watch">
            <h1>WATCH</h1>
          </div>
         
        </div>
        <div className='join'>
          <div className="text">
            <h5>JOIN US FOR AN ONLINE GATHERING</h5>
            <p>We gather online each Sunday at 9:30a and 11:45a ET and would love for you to join us!</p>
            <h4><a >JOIN US &rarr;</a></h4>
          </div>
      </div>
       </div>
      </div>
      

       {/* Place in the church */}

       <div className="">
        <div className='carousel'><Slider/></div>
        {/* <Locations/> */}
       </div>
       {/* <Messages/> */}
       <Events/>
       <Footer/>

       
        
    </div>
   </section>
  )
}

export default AmsHome