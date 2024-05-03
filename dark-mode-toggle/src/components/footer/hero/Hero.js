import React from 'react'
import  heroImg from "../../../assets/phone.svg"

const Hero = () => {
  return (
    <section className='hero'>
        <div className='container --grid-15'>
          <div className='hero-text'>
           <h1>Visit Vila Shop Landing Page.</h1>
           <p>Loreum ipsum dolor sit amet consecutor adispisicing elit?</p>
           <div className='--flex-start'>
            <button className='--btn btn-p'>Learn More</button>
            <button className='--btn --btn-danger'>Sign up</button>
           </div>
          
        </div >
        <div className='--text-center'>
          <img src={heroImg} alt="phone" width={200} /> 
        </div>
        </div >
    </section>
  )
}

export default Hero
